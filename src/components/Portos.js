import Image from "next/image";
import { useState, useEffect } from "react";

export default function Portos() {
  const [Portos, setPortos] = useState([]);

  useEffect(() => {
    async function fetchPortos() {
      const res = await fetch("/api/arzedvic");
      const data = await res.json();
      setPortos(data);
    }

    fetchPortos();
  }, []);
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
      {Portos.map((Porto) => (
        <div key={Porto.title} className="flex flex-col">
          <h2>{Porto.title}</h2>
          <Image className="object-scale-down"
            src={Porto.thumbnail}
            width={700}
            height={395}
            alt={Porto.title}
          ></Image>
          <a
            className="px-4 py-2 rounded-full bg-white hover:bg-pink-500 text-pink-500 hover:text-white mx-auto mt-2 hover:ease-in-out hover:duration-300"
            href={Porto.sourceLink}
          >
            Detail
          </a>
        </div>
      ))}
    </div>
  );
}
