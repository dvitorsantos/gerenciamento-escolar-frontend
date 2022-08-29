import { useState } from "react";
import Image from "next/image";
import Router from "next/router";

import MenuItem from "./menuItem";

import logo from "../images/logo.svg";
import addIcon from "../images/addIcon.png";
import movimentationIcon from "../images/movimentationIcon.svg";
import paper from "../images/paperIcon.svg";

function Menu(props: any) {
  const [menus, setMenus] = useState([
    {
      icone: addIcon,
      descricao: "Cadastro",
      destination: "/cadastro"
    },
    {
      icone: movimentationIcon,
      descricao: "Movimentação",
      destination: "/movimentacao"
    },
    {
      icone: paper,
      descricao: "Relatório",
      destination: "/relatorio"
    },
  ]);

  return (
    <div className="bg-[#F8F6F9] w-80 p-5 rounded-r-[20px] h-screen shadow-xl">
      <div className="flex items-center mt-2 ml-2 mb-12 hover:cursor-pointer" onClick={() => {Router.push("/")}}>
        <Image src={logo} />
        <h1 className="font-bold text-3xl ml-4">Escolar</h1>
      </div>
      {menus.map((menu) => {
        return (
          <MenuItem icone={menu.icone} descricao={menu.descricao} destination={menu.destination} />
        );
      })}
    </div>
  );
}

export default Menu;
