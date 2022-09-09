import {createContext, ReactNode, useEffect, useState} from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { getApi } from "../services/axios";

type Usuario = {
  id: BigInteger;
  login: string;
  email: string;
};

type SignInData = {
  login: string;
  senha: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  usuario: Usuario | null;
  signIn: (data: SignInData) => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const isAuthenticated = !!usuario;
  const api = getApi();

  useEffect(() => {
    const fetchUsuarios = async () => {
      const { "nextauth.token": token } = parseCookies();

      if (token) {
        await api.get(`/usuarios/${token}`).then(function (response) {
          setUsuario({
            id: response.data.id,
            login: response.data.login,
            email: response.data.email,
          });
        });
      }
    };

    fetchUsuarios();
  }, []);

  async function signIn({ login, senha }: SignInData) {
    await api
      .post("/usuarios/auth", {
        login,
        senha,
      })
      .then(function (response) {
        setCookie(undefined, "nextauth.token", response.data.token, {
          maxAge: 60 * 60 * 1, // 1 hour
        });

        setUsuario(response.data.usuario);

        Router.push("/");
      })
      .catch(function (error) {
        throw error;
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, usuario }}>
      {children}
    </AuthContext.Provider>
  );
}
