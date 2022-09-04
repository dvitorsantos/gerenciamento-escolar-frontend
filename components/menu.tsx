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
  ]);

  return (
    <div>
      <div className="flex overflow-hidden bg-white rounded-r-lg h-screen">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-700 border-r">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <a href="/" className="px-8 text-left focus:outline-none">
                  <h2 className="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white">
                    Escolar
                  </h2>
                </a>
                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-indigo-700">
                  <ul>
                    {menus.map((menu) => {
                      return (
                        <MenuItem
                          icone={menu.icone}
                          descricao={menu.descricao}
                          destination={menu.destination}
                        />
                      );
                    })}
                  </ul>
                  <p className="px-4 pt-4 font-medium text-white uppercase">
                    OUTRA SEÇÃO
                  </p>
                  <ul>
                    <li></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
