import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import { getApi } from "../../services/axios";

import MenuLateral from "../../components/menu";
import Header from "../../components/header";
import Router from "next/router";

type Aluno = {
  id: BigInteger;
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  telefone: string;
  cor: string;
  sexo: string;
  pais: string;
  estado: string;
  cidade: string;
  cep: string;
};

const Home: NextPage = () => {
  const api = getApi();

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    api
      .get("/alunos")
      .then(function (response: any) {
        setAlunos(response.data);
        console.log(alunos);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);

  return (
    <div className="flex">
      <MenuLateral />
      <div className="min-h-full w-full">
        <Header />
        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
            <div className="flex items-end justify-end mb-4">
              <button
                type="button"
                onClick={() => {Router.push('/alunos/cadastro');}}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Novo
              </button>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left table-auto ">
                <thead className="text-xs text-gray-700 bg-gray-50 bg-gray-50 text-gray-500">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Nome
                    </th>
                    <th scope="col" className="py-3 px-6">
                      CPF
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Email
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Telefone
                    </th>
                    <th scope="col" className="py-3 px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(alunos) ? (
                    alunos.map((aluno) => {
                      return (
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900"
                          >
                            {aluno.nome + aluno.sobrenome}
                          </th>
                          <td className="py-4 px-6 text-gray-500">
                            {aluno.cpf}
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            {aluno.email}
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            {aluno.telefone}
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            <a href="#" className="font-medium text-indigo-700">
                              Edit
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div role="status" className="max-w-sm animate-pulse">
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-500"
                        >
                          <div className="h-4 rounded-full bg-gray-400 w-48"></div>
                        </th>
                        <td className="py-4 px-6 text-gray-500">
                          <div className="h-4 rounded-full bg-gray-400 w-48"></div>
                        </td>
                        <td className="py-4 px-6 text-gray-500">
                          <div className="h-4 rounded-full bg-gray-400 w-48"></div>
                        </td>
                        <td className="py-4 px-6 text-gray-500">
                          <div className="h-4 rounded-full bg-gray-400 w-48"></div>
                        </td>
                        <td className="py-4 px-6 text-gray-500">
                          <div className="h-4 rounded-full bg-gray-400 w-48"></div>
                        </td>
                      </tr>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ["nextauth.token"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
