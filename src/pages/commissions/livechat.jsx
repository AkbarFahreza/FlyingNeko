/* eslint-disable */
import React from "react";
import Card from "./commponents/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "./commponents/Portfolio";
export async function getStaticProps() {
  const response = await fetch("https://reeza.netlify.app/api/Pwirtifilii");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
export default function livechatsKah({ data }) {
  const Basic = [
    "• Chat only (Supperchat Dll. style default dari YouTube)",
    "• Support pembeda warna antara : Owner, Moderator, Viewer biasa, dan membership",
    "• Bentuk dan warna bisa disesuaikan dengan permintaan",
  ];
  const Full = [
    "• Full styling termasuk Supperchat Dll. ",
    "• Support pembeda warna antara : Owner, Moderator, Viewer biasa, dan membership",
    "• Bentuk dan warna bisa disesuaikan dengan permintaan",
  ];
  return (
    <div className="grid grid-cols-1 justify-center gap-4 scrollbar-track-secondary">
      <p className="text-center font-bold text-xl md:text-3xl  m-6">
        Berikut adalah Price Lists serta beberapa portofolio saya
      </p>
      <div className=" scale-75 md:scale-100 mx-auto grid mb-10 grid-cols-1 md:grid-cols-2 gap-4 -mt-32 md:-mt-0">
        <Card
          cardBg="#fff"
          Paket="Basic"
          btnBg="#7D40FF"
          btnClr="#fff"
          Basics={Basic}
        >
          <a
            className="font-bold p-4 text-center hover:ease-in-out hover:duration-300 rounded-full mx-auto bg-secondary hover:bg-aksen"
            href="https://twitter.com/messages/1356941102247333890-1356941102247333890"
          >
            Mulai Dari IDR 70K
          </a>
        </Card>

        <Card
          cardBg="#7D40FF"
          Paket="Full"
          btnBg="#fff"
          btnClr="#7D40FF"
          Basics={Full}
        >
          <a
            className="font-bold p-4 mt-6 text-center hover:ease-in-out hover:duration-300 rounded-full mx-auto bg-white hover:bg-aksen text-secondary hover:text-white"
            href="https://twitter.com/messages/1356941102247333890-1356941102247333890"
          >
            DM Twitter detail harga
          </a>
        </Card>
      </div>
      <Portfolio data={data} />
      <div className="flex justify-center py-5  mx-auto space-x-4 align-middle cursor-pointer">
        <a className="" href="/">
          <FontAwesomeIcon
            icon={faHome}
            className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-4 font-semibold text-white bg-secondary hover:bg-aksen mx-auto"
            size="1x"
          />
        </a>
        <a className="" href="https://twitter.com/Revernry">
          <FontAwesomeIcon
            icon={faTwitter}
            className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-4 font-semibold text-secondary text-center hover:text-white bg-white hover:bg-aksen mx-auto"
            size="1x"
          />
        </a>
      </div>
    </div>
  );
}
