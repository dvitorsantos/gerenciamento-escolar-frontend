import { createContext } from "react";
import { setCookie } from "nookies";
import axios from "axios";

type AuthContextType = {
  isAuthenticated: boolean;
};

type SignInData = {
  login: string;
  senha: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const isAuthenticated = false;

  async function signIn({ login, senha }: SignInData) {
    await axios
      .post("http://localhost:8080/usuarios/auth", {
        login,
        senha,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
