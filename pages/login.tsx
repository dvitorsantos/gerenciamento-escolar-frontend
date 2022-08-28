import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Image from "next/image";

import loginBanner from "../images/loginBanner.svg";

import Error from "../components/error";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [errorVisible, setErrorVisible] = useState(false);

  async function handleSignIn(data: object) {
    try {
      await signIn(data);
    } catch (error: any) {
      setError(error.response.data);
      setErrorVisible(true);
    }
  }

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="h-screen">
            <div className="w-full h-full rounded-r-[20px] bg-[#0119F5] bg-opacity-10 flex justify-center items-center">
              <Image src={loginBanner} />
            </div>
          </div>
          <div className="h-screen flex flex-col space-y-4 items-center justify-center mr-4">
            <div className="flex flex-col space-y-4 items-center justify-center w-4/5">
              <h1 className="text-5xl self-start">Bem vindo de volta!</h1>
              <p className="text-2xl self-start">Lorem ipsum dolor sit</p>
              <input
                {...register("login")}
                className="shadow appearance-none border rounded w-full h-[56px] py-2 px-3 text-gray-800 leading-tight border-gray-300 focus:outline-blue-700"
                id="login"
                type="text"
                placeholder="Login"
              />
              <input
                {...register("senha")}
                className="shadow appearance-none border rounded w-full h-[56px] py-2 px-3 text-gray-800 mb-3 leading-tight border-gray-300 focus:outline-blue-700"
                id="password"
                type="password"
                placeholder="Senha"
              />
              <Error
                titulo="Erro ao autenticar!"
                mensagem={error?.message}
                visible={errorVisible}
                setErrorVisible={setErrorVisible}
              />
              <div className="flex justify-between w-full">
                <div className="flex">
                  <input type="checkbox" name="" id="" />
                  <p className="ml-2">Lembre-se de mim</p>
                </div>
                <a href="http://">Esqueceu a senha?</a>
              </div>
              <button
                className="transition ease-in-out delay-150 bg-blue-500 hover:translate-x-2 hover:scale-105 hover:bg-[#4B42FF] duration-300
                        bg-[#6c63ff] self-start w-1/2 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
