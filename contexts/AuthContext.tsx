import { Component, createContext, useState } from "react";
import { setCookie } from "nookies";
import axios from "axios";
import Router from 'next/router'

type User = {
  nome: string;
  email: string;
};

type SignInData = {
  login: string;
  senha: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
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
        setCookie(undefined, 'nextauth.token', response.data.token, {
          maxAge: 60 * 60 * 1 // 1 hour
        })

        Router.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
