/* eslint-disable */
import Link from "next/link";
import Image from "next/image";

export default function LCMenusCard({ Judul, Tamnel, LinkEdit, TemplateLink }) {
  return (
    <div className="h-[340px] m-2 px-1 backdrop-blur-3xl py-2 rounded-md flex flex-col justify-center text-center w-[400px] bg-transparent ">
      <div className="w-auto h-auto rounded-md  overflow-hidden">
        <Image
          src={Tamnel}
          alt="Template Tamnel"
          width={500}
          height={200}
          className="w-auto  hover:scale-125 hover:transition-all bg-cover h-auto"
        ></Image>
      </div>
      <a
        className="font-bold hover:text-aksen my-2 overflow-scroll max-h-[55px]"
        href={TemplateLink}
      >
        {Judul}
      </a>
      <a
        href={LinkEdit}
        className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-12 font-semibold text-secondary align-middle text-center bg-white hover:bg-aksen hover:text-white mx-auto"
      >
        Edit Color
      </a>
    </div>
  );
}
