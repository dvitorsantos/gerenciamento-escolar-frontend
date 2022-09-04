import Image from "next/image";
import Router from "next/router";

function SearchOptions(props: any) {
  function redirect() {
    Router.push(props.destination);
  }

  return (
    <li className="flex p-4 hover:bg-indigo-600 hover:cursor-pointer w-100 h-12 items-center text-white transition duration-500 ease-in-out transform border-indigo-800" onClick={() => redirect()}>
      <p><strong>{props.numero} </strong></p>
      <p className="ml-3">{props.descricao}</p>
    </li>
  );
}

export default SearchOptions;
