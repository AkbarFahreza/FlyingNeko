/* eslint-disable */
import React, { useState } from "react";
import Chats from "../components/Chats";
import Link from "next/link";

function App() {
  const [OwnerColor, setOwnerColor] = useState("#ff7b00");
  const [ModeratorColor, setModeratorColor] = useState("#0044ff");
  const [MemberColor, setMemberColor] = useState("#00c41a");
  const [GeneralColor, setGeneralColor] = useState("#d400ff");
  const [css, setCss] = useState("");

  const OwnerColorChange = (event) => {
    setOwnerColor(event.target.value);
  };
  const ModeratorColorChange = (event) => {
    setModeratorColor(event.target.value);
  };
  const MemberColorChange = (event) => {
    setMemberColor(event.target.value);
  };
  const GeneralColorChange = (event) => {
    setGeneralColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const updateCss = () => {
    const newCss = `
      :root {
        --owner-color: ${OwnerColor};
        --moderator-color: ${ModeratorColor};
        --member-color: ${MemberColor};
        --general-color: ${GeneralColor};
    }
    `;
    setCss(newCss);
  };
  return (
    <div className="flex flex-col py-10 justify-center align-middle min-h-screen">
      <Link
        href="https://trakteer.id/Revii/showcase/live-chat-overlay-template-1-svNNs"
        className="justify-center text-center font-bold"
      >
        [ Template 1 ] Youtube Live Chat Widget/Overlay "Rounded Border"
      </Link>
      <p className="justify-center text-center mb-10">
        Color Editor Template (From Trakteer)
      </p>
      <div className="flex flex-col md:flex-row justify-evenly align-middle mx-auto md:space-x-64 px-10">
        <div id="customizing" className="mb-10 ">
          <div className="flex flex-col">
            <div id="colorDef">
              <div className="py-1">Owner Color :</div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={OwnerColor}
                onChange={OwnerColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1">Moderator Color :</div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={ModeratorColor}
                onChange={ModeratorColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1">Member Color :</div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={MemberColor}
                onChange={MemberColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 rounded-full">General Color :</div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={GeneralColor}
                onChange={GeneralColorChange}
              />
            </div>
          </div>
          <div>
            <br />
            <div className="flex flex-col rounded-lg relative">
              <div className="flex justify-between bg-secondary rounded-t-md rounded-tl-md z-50">
                <button
                  className="p-2 bg-secondary rounded-lg text-white"
                  onClick={updateCss}
                >
                  Update CSS
                </button>
                <div>
                  <button
                    className=" rounded-lg text-white p-2"
                    onClick={copyText}
                  >
                    {copied ? "Copied!" : "Copy CSS"}
                  </button>
                  
                </div>
              </div>
              <code className="md:max-w-xs h-36 w-[80vw] md:w-72 backdrop-blur-2xl rounded-b-md rounded-bl-md  bg-opacity-5 bg-aksen p-4 relative">
                <p>{css}</p>
              </code>
              <div className="-z-50">
                <span className="w-28 h-28 bg-purple-800 blur-lg rounded-full absolute -z-50 animate-rndm"></span>
                <span className="w-28 h-28 bg-aksen blur-lg rounded-full absolute -z-50 animate-rndmOne "></span>
              </div>
            </div>
          </div>
        </div>
        <div className="z-50 flex-col space-y-3 mx-auto">
          <div id="owner" className="flex flex-col">
            <div
              className="py-1 px-2 rounded-full text-center font-bold bg-white rounded-bl-none mr-auto"
              style={{
                borderColor: `${OwnerColor}`,
                color: `${OwnerColor}`,
                borderWidth: 2 + "px",
              }}
            >
              Nama Owner
            </div>
            <div
              className="py-2 px-2  rounded-full rounded-tl-none"
              style={{ backgroundColor: `${OwnerColor}`, color: "#fff" }}
            >
              Hallo Saya Owner Gaes
            </div>
          </div>
          <div id="Moderator" className="flex flex-col">
            <div
              className="py-1 px-2 rounded-full text-center font-bold bg-white rounded-bl-none mr-auto"
              style={{
                borderColor: `${ModeratorColor}`,
                color: `${ModeratorColor}`,
                borderWidth: 2 + "px",
              }}
            >
              Nama Moderator
            </div>
            <div
              className="py-2 px-2  rounded-full rounded-tl-none"
              style={{ backgroundColor: `${ModeratorColor}`, color: "#fff" }}
            >
              Hallo Saya Moderator Gaes
            </div>
          </div>
          <div id="Member" className="flex flex-col">
            <div
              className="py-1 px-2 rounded-full text-center font-bold bg-white rounded-bl-none mr-auto"
              style={{
                borderColor: `${MemberColor}`,
                color: `${MemberColor}`,
                borderWidth: 2 + "px",
              }}
            >
              Nama Member
            </div>
            <div
              className="py-2 px-2  rounded-full rounded-tl-none"
              style={{ backgroundColor: `${MemberColor}`, color: "#fff" }}
            >
              Hallo Saya Member Gaes
            </div>
          </div>
          <div id="General" className="flex flex-col max-w-[200px]">
            <div
              className="py-1 px-2 rounded-full text-center font-bold bg-white rounded-bl-none mr-auto"
              style={{ backgroundColor: `${GeneralColor}`, color: `#fff` }}
            >
              Nama Viewer
            </div>
            <div
              className="py-2 px-2  rounded-2xl rounded-tl-none"
              style={{
                backgroundColor: `#fff`,
                color: "#000",
                borderColor: `${GeneralColor}`,
                borderWidth: 2 + "px",
              }}
            >
              Mas Reza Ganteng Banget OMAGAHHH
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 flex-col lg:flex-row cursor-pointer">
        <Link
          className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-16 font-semibold text-white align-middle bg-secondary hover:bg-aksen mx-auto"
          href="/apps/TemplatesMenu"
        >
          Templates Menu
        </Link>
        <Link
          className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-12 font-semibold text-secondary align-middle text-center bg-white hover:bg-aksen hover:text-white"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default App;
