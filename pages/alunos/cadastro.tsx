import type { NextPage } from "next";

import MenuLateral from "../../components/menu";
import Header from "../../components/header";

import { getApi } from "../../services/axios";

import { useForm } from "react-hook-form";
import FormAluno from "../../components/formAluno";

const Cadastro: NextPage = () => {
  const api = getApi();

  async function handleFormSubmit(data: any) {
    await api
    .post("/alunos", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      throw error;
    });
  }

  return (
    <div className="flex">
      <MenuLateral />
      <div className="min-h-full w-full">
        <Header />
        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8 ">
            <FormAluno handleFormSubmit={handleFormSubmit} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cadastro;