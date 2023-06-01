/* eslint-disable */
import { useState } from "react";
import Head from "next/head";
import Buttons from "@/components/Buttons";
export default function livechatsdummy({ link }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(
      "https://reza-youtube-livechatdemo.netlify.app/"
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <section className="flex flex-col justify-center overflow-hidden md:px-10 md:max-h-screen  mb-10">
      <Head>
        <title>Fahreza | LiveChat Dummy</title>
      </Head>
      <h1 className="cursor-pointer tooltip p-3 bg-secondary rounded-full mx-auto text-lg mt-5 mb-5 font-bold">
        YouTube LiveChat Dummy
        <span className="tooltiptext">
          Untuk kalian kalau mau styling Youtube LiveChat, bisa pake ini buat
          test tampilan
        </span>
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="px-5 mb-10 flex flex-col justify-center align-middle">
          <p
            className="font-bold text-center text-lg
          "
          >
            Cara Penggunaan :
          </p>
          <ul className="space-y-1 list-disc p-2">
            <li>
              Copy Link berikut{" "}
              <button
                className=" text-aksen rounded-lg ml-1"
                onClick={copyText}
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </li>
            <li>Buka OBS Studio Kalian</li>
            <li>Tambahkan "Browser" Sources Baru</li>
            <li>
              Paste Link Dummy LiveChat Yang Sudah Kalian Copy Pada Kolom URL
            </li>
            <li>
              Untuk Memunculkan Chats, klik "Interact" pada Browser Sources Nya
            </li>
            <li>Lalu Klik Tombol "Chats", "Suppa", "Member", "Gift"</li>
          </ul>
          {/* 
          <Buttons
            LinkDir="/"
            Apah="Back To Home"
            LinkDir1="https://reza-youtube-livechatdemo.netlify.app/"
            Apah1="Open Chat On New Tab"
          /> */}
          <div className="flex justify-center mt-5 flex-col lg:flex-row cursor-pointer text-center">
            <a
              className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-16 font-semibold text-white align-middle bg-secondary hover:bg-aksen mx-auto"
              href="/"
            >
              Back To Home
            </a>
            <a
              className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-12 font-semibold text-secondary align-middle text-center bg-white hover:bg-aksen hover:text-white mx-auto"
              href="https://reza-youtube-livechatdemo.netlify.app/"
            >
              Open Chat On New Tab
            </a>
            <a
              className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-16 font-semibold text-white align-middle bg-secondary hover:bg-aksen mx-auto"
              href="https://beta-rzytblc.netlify.app/"
            >
              try V2 (Beta)
            </a>
          </div>

          <div className="px-5 mb-10 flex mx-auto align-middle text-center mt-3">
            <p>
              <soan className="text-red-600 font-bold">*</soan> Ditakutkan ada
              kemungkinan perbedaan hasil dari tester ini dengan livechat
              youtube yg asli, karena itu harap menggunakan livechat youtube
              juga
            </p>
          </div>
        </div>
        <iframe
          className="h-[50vh] md:h-[80vh] w-full md:w-1/2 border-aksen border-solid border-2"
          src="https://reza-youtube-livechatdemo.netlify.app/"
        ></iframe>
      </div>
    </section>
  );
}
