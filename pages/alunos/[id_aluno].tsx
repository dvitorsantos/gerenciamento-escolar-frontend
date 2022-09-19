import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import { getApi } from "../../services/axios";

import MenuLateral from "../../components/menu";
import Header from "../../components/header";
import Router from "next/router";
import FormAluno from "../../components/formAluno";

import { useRouter } from 'next/router'

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

  const router = useRouter()
  const { id_aluno } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    api
      .get(`alunos/${id_aluno}`)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);

 
  async function handleFormSubmit(data: any) {
    await api
    .put(`alunos/${id_aluno}`, data)
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
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
            <FormAluno handleFormSubmit={handleFormSubmit} data={data}></FormAluno>
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
