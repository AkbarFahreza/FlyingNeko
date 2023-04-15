import Image from "next/image";
import Icons from "@/components/icons";
// import '../../public/styles.css';

import TabsSection from "@/components/Tabs";
import Buttons from "@/components/Buttons";

const ppTwt =
  "https://pbs.twimg.com/profile_images/1611011443721383938/l_ME_3Ps_400x400.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-7 md:py-[10vh] px-0 relative overflow-hidden">
      <Image
        src="./blob(1).svg"
        width={600}
        height={400}
        alt="Ini Foto Profil"
        className="justify-center absolute rounded-full -z-50 bottom-0 -right-52 md:-right-72 md:-bottom-52 animate-spin-slow blur-lg"
      ></Image>
      <Image
        src={ppTwt}
        width={100}
        height={100}
        alt="Ini Foto Profil"
        className="justify-center rounded-full "
      ></Image>
      <div className="justify-center border-solid mt-4 border-white text-center mb-4">
        <p className="text-2xl text-white font-bold my-2">
          Fah<span className="text-pink-500">reza</span>
        </p>
        <div className="text-xs md:text-md max-w-2xl px-7">
          <code>
            Hallo, saya adalah Front End Developer pemula yang juga seorang
            apasih namanya yang open comisson itu? ya intinya aku juga pemula
            dalam hal itu dan jasa yang saya tawarkan adalah <span className="text-aksen">Styling YouTube
            LiveChat CSS </span> untuk Overlay Streaming. Saya juga beberapa membagikan
            Template untuk kalian pakai di Trakteer
          </code>
        </div>
      </div>
      <Icons />
      <Buttons />
      <TabsSection />
      <div className="sticky bg-white px-2 py-1 text-black rounded-md mt-5 flex justify-center text-center">
        <p>Ver : 1.0.0</p>
      </div>
    </main>
  );
}
