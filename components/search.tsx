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
      icone: addIcon,
      descricao: "Cadastro",
      destination: "/cadastro",
    },
    {
      icone: movimentationIcon,
      descricao: "Movimentação",
      destination: "/movimentacao",
    },
    {
      icone: paper,
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
      <div className="flex shadow-md h-12">
        <div className="bg-[#F8F6F9] flex items-center justify-center w-12 cursor-pointer">
          <Image src={searchIcon}></Image>
        </div>
        <input
          className="bg-[#F8F6F9] w-80 focus:outline-none"
          type="text"
          name="search"
          id="search"
          onChange={handleSearch}
        />
        <div className="bg-[#F8F6F9] flex items-center justify-center w-10 cursor-pointer">
          <Image src={closeIcon}></Image>
        </div>
      </div>
      <ul className="bg-[#F8F6F9] w-[408px] mt-4 shadow-md absolute h-50 overflow-auto">
        {filteredTelas.map((tela) => {
          return (
            <SearchOptions
              icone={tela.icone}
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
