import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  // async function handleSignIn(data: object) {
  //   await axios
  //     .post("http://localhost:8080/usuarios/auth", data)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }


  async function handleSignIn(data: object) {
    await signIn(data)
  }

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="h-screen">
            <div className="w-full h-full rounded-r-[20px] bg-[#0119F5]"></div>
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
              <div className="flex justify-between w-full">
                <div className="flex">
                  <input type="checkbox" name="" id="" />
                  <p className="ml-2">Lembre-se de mim</p>
                </div>
                <a href="http://">Esqueceu a senha?</a>
              </div>
              <button
                className="transition ease-in-out delay-150 bg-blue-500 hover:translate-x-2 hover:scale-105 hover:bg-[#0013BE] duration-300
                        bg-[#0119F5] self-start w-1/2 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
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
