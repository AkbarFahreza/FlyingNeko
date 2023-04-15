import { useState } from "react";
import Head from 'next/head';
export default function livechats() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMousePos({ x: event.clientX, y: event.clientY });
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="overflow-hidden min-h-screen flex-col px-10 content-center flex relative justify-center text-center text-secondary"
    >
      <Head>
        <title>Fahreza | LiveChat Comissions</title>
      </Head>
      <p className="font-bold text-5xl md:text-6xl mb-4 md:mb-10">(っ˘̩╭╮˘̩)っ</p>
      <p className="font-bold">
        Halaman masih dalam tahap pengembangan, nantikan yachh!~
      </p>
      <a className="p-2 rounded-md mt-10 bg-aksen hover:bg-secondary text-white mx-auto" href="/">
        back
      </a>
      <div
        className="transition-all duration-200 ease-in-out absolute top-64"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <span className="w-28 h-28 bg-purple-800 blur-lg rounded-full absolute -z-50 animate-rndm"></span>
        <span className="w-28 h-28 bg-aksen blur-lg rounded-full absolute  -z-50 animate-rndmOne "></span>
      </div>
    </div>
  );
}
