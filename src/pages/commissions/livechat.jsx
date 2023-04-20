/* eslint-disable */
import Card from "./commponents/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function livechatsKah() {
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
    <div className="flex flex-col justify-center my-6">
      <p className="text-center font-bold mx-6">
        Berikut adalah Price Lists serta beberapa protfolio saya
      </p>
      <div className="-mt-24 md:mt-6 scale-75 md:scale-100 flex flex-col mx-auto md:flex-row space-y-4 md:space-x-5 md:space-y-0 ">
        <Card
          cardBg="#fff"
          Paket="Basic"
          btnBg="#7D40FF"
          btnClr="#fff"
          Basics={Basic}
        >
          <a
            className="font-bold p-4 text-center hover:ease-in-out hover:duration-300 rounded-full mx-auto bg-secondary hover:bg-aksen"
            href="https://twitter.com/Revernry"
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
            href="https://twitter.com/Revernry"
          >
            Mulai Dari IDR 85K
          </a>
        </Card>
      </div>
      <div className="flex justify-center py-5 -mt-20 md:mt-0 mx-auto space-x-4 align-middle cursor-pointer">
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
