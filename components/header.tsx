import Image from "next/image";

import { useState } from "react";

import mapPinIcon from "../images/mapPinIcon.svg";
import calendarIcon from "../images/calendarIcon.svg";
import closeIcon from "../images/closeIcon.svg";
import searchIcon from "../images/searchIcon.svg";

import Search from "./search";

function Header(props: any) {
  const telas = [
    {
      icone: closeIcon,
      descricao: "Cadastro",
    },
    {
      icone: closeIcon,
      descricao: "Teste",
    },
    {
      icone: closeIcon,
      descricao: "Mais tela",
    },
    {
      icone: closeIcon,
      descricao: "Outro módulo",
    },
  ];

  const [filteredTelas, setFilteredTelas] = useState(telas)

  function handleSearch(event: any) {
    setFilteredTelas(telas.filter(tela => tela.descricao.includes(event.target.value)))
    console.log(filteredTelas)
  }

  return (
    <div className="p-8 w-full h-32 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl mb-1">Escola Sabedoria</h1>
        <div className="flex">
          <Image src={mapPinIcon} />
          <p className="mr-10">Unidade João Paulo</p>
          <Image src={calendarIcon} />
          <span className="ml-1">2022</span>
        </div>
      </div>
      <div className="flex">
        <Search></Search>
        <div className="bg-[#F8F6F9] w-12 h-12 rounded-full shadow-md ml-9"></div>
      </div>
    </div>
  );
}

export default Header;
