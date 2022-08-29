import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Menu from "../components/menu";
import Header from "../components/header";

const Home: NextPage = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <div className="flex">
      <Menu />
      <Header />
      <h1 className="text-3xl font-bold">ATIVADO: {usuario?.login}</h1>
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
