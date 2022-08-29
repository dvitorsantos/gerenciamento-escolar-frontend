import Image from "next/image";

import mapPinIcon from "../images/mapPinIcon.svg";
import calendarIcon from "../images/calendarIcon.svg";

function Header(props: any) {
    return (<div className="p-8">
    <h1 className="font-bold text-3xl mb-1">Escola Sabedoria</h1>
    <div className="flex">
      <Image src={mapPinIcon} />
      <p className="mr-10">Unidade João Paulo</p>
      <Image src={calendarIcon} />
      <span className="ml-1">2022</span>
    </div>
  </div>)
}

export default Header;