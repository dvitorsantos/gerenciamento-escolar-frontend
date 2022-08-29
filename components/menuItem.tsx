import Image from "next/image";
import Router from "next/router";

function MenuItem(props: any) {
  function redirect() {
    Router.push(props.destination);
  }

  return (
    <div
      className="flex items-center mt-4 mb-4 hover:bg-[#F2F2F2] rounded-[5px] p-2 hover:cursor-pointer"
      onClick={() => redirect()}
    >
      <Image src={props.icone} width="25px" height="25px" />
      <p className="ml-3">{props.descricao}</p>
    </div>
  );
}

export default MenuItem;
