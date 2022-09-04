import Image from "next/image";
import Router from "next/router";

function SearchOptions(props: any) {
  function redirect() {
    Router.push(props.destination);
  }

  return (
    <li className="flex p-4 hover:bg-[#F2F2F2] hover:cursor-pointer w-100" onClick={() => redirect()}>
      <Image src={props.icone} width="25px" height="25px"></Image>
      <p className="ml-3">{props.descricao}</p>
    </li>
  );
}

export default SearchOptions;
