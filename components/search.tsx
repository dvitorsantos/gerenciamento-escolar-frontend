import Image from "next/image";

import { useState } from "react";

import closeIcon from "../images/closeIcon.svg";
import searchIcon from "../images/searchIcon.svg";
import addIcon from "../images/addIcon.png";
import movimentationIcon from "../images/movimentationIcon.svg";
import paper from "../images/paperIcon.svg";

import SearchOptions from "./searchOptions";

function Search(props: any) {
  const telas = [
    {
      numero: "123",
      descricao: "Cadastro",
      destination: "/cadastro",
    },
    {
      numero: "321",
      descricao: "Movimentação",
      destination: "/movimentacao",
    },
    {
      numero: "213",
      descricao: "Relatório",
      destination: "/relatorio",
    },
  ];

  const [filteredTelas, setFilteredTelas] = useState([]);

  function handleSearch(event: any) {
    const search = event.target.value;

    search
      ? setFilteredTelas(
          telas.filter((tela) => tela.descricao.includes(search))
        )
      : setFilteredTelas([]);
  }

  return (
    <div>
      <div className="flex">
        <input
          placeholder="Pesquisar"
          className="w-full px-5 h-10 w-[408px] text-base text-neutral-500 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          onChange={handleSearch}
        ></input>
      </div>
      <ul className="bg-indigo-700 rounded w-[408px] mt-4 shadow-md absolute h-50 overflow-auto z-50">
        {filteredTelas.map((tela) => {
          return (
            <SearchOptions
              numero={tela.numero}
              descricao={tela.descricao}
              destination={tela.destination}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
