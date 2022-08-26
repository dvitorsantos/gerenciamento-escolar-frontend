import { Component, createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import axios from "axios";
import Router from "next/router";

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

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const isAuthenticated = !!usuario;

  useEffect(() => {
    const fetchUsuarios = async () => {
      const { "nextauth.token": token } = parseCookies();

      if (token) {
        await axios
          .get(
            `http://localhost:8080/usuarios/${token}`, 
            { headers: {"Authorization" : `Bearer ${token}`} })
          .then(function (response) {
            setUsuario({
              id: response.data.id,
              login: response.data.login,
              email: response.data.email,
            })
          });
      }
    };

    fetchUsuarios();
  }, []);

  async function signIn({ login, senha }: SignInData) {
    await axios
      .post("http://localhost:8080/usuarios/auth", {
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
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, usuario }}>
      {children}
    </AuthContext.Provider>
  );
}
