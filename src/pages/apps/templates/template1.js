/* eslint-disable */
import React, { useState } from "react";
import Link from "next/link";
import Buttons from "@/components/Buttons";

function templates1() {
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
    @import url("https://fonts.googleapis.com/css?family=Changa One");
    @import url("https://fonts.googleapis.com/css?family=Imprima");
      :root {
        --owner-color: ${OwnerColor};
        --moderator-color: ${ModeratorColor};
        --member-color: ${MemberColor};
        --general-color: ${GeneralColor};
    }
    body {
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0);
    }
    
    yt-live-chat-renderer {
      background-color: transparent !important;
    }
    
    yt-live-chat-text-message-renderer #content {
      display: flex;
      flex-direction: column;
      max-width: 75% !important;
      padding-left: 20px;
    }
    
    #content,
    yt-live-chat-text-message-renderer {
      animation-name: animation;
      animation-duration: 1.5s;
    }
    
    @keyframes animation {
      0% {
        transform: scale(0) translateX(0);
      }
      30% {
        transform: scale(100%) translateX(-30px);
      }
    }
    
    /* Isi Pesan member biasa */
    
    yt-live-chat-text-message-renderer #message {
      margin-top: -25px;
      border: 2px solid var(--general-color) !important;
      font-family: "Imprima";
      padding: 20px;
      border-radius: 0px 20px 20px 20px;
      background-color: #fff !important;
      color: #000 !important;
    }
    
    /* Isi Pesan Owner */
    
    yt-live-chat-text-message-renderer[author-type="owner"] #message {
      font-family: "Imprima";
      padding: 20px;
      border-radius: 0px 20px 20px 20px;
      background-color: var(--owner-color) !important;
      color: #fff !important;
      border: 0px solid #fff !important;
    }
    
    /* Isi Pesan Moderator */
    
    yt-live-chat-text-message-renderer[author-type="moderator"] #message {
      padding: 20px;
      font-family: "Imprima";
      border-radius: 0px 20px 20px 20px;
      background-color: var(--moderator-color) !important;
      border: 0px solid #fff !important;
      color: #fff !important;
    }
    
    /* Isi Pesan Membership */
    
    yt-live-chat-text-message-renderer[author-type="member"] #message {
      padding: 20px;
      font-family: "Imprima";
      border-radius: 0px 20px 20px 20px;
      border: 0px solid #fff !important;
      background-color: var(--member-color) !important;
      color: #fff !important;
    }
    
    yt-live-chat-text-message-renderer,
    yt-live-chat-text-message-renderer[is-highlighted] {
      background-color: transparent !important;
    }
    
    yt-live-chat-text-message-renderer[author-type="owner"],
    yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] {
      background-color: transparent !important;
    }
    
    yt-live-chat-text-message-renderer[author-type="moderator"],
    yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] {
      background-color: transparent !important;
    }
    
    yt-live-chat-text-message-renderer[author-type="member"],
    yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {
      background-color: transparent !important;
    }
    
    yt-live-chat-author-chip #author-name {
      background-color: transparent !important;
    }
    
    yt-live-chat-renderer * {
      font-weight: bold !important;
      font-family: "Imprima";
      font-size: 18px !important;
      line-height: normalpx !important;
    }
    
    yt-live-chat-text-message-renderer #content,
    yt-live-chat-legacy-paid-message-renderer #content {
      overflow: initial !important;
    }
    
    yt-live-chat-item-list-renderer #items {
      overflow: hidden !important;
    }
    
    yt-live-chat-item-list-renderer #item-scroller {
      overflow: hidden !important;
    }
    
    yt-live-chat-header-renderer,
    yt-live-chat-message-input-renderer {
      display: none !important;
    }
    
    yt-live-chat-text-message-renderer,
    yt-live-chat-legacy-paid-message-renderer {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
    
    yt-live-chat-paid-message-renderer #header {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
    
    yt-live-chat-text-message-renderer #author-photo,
    yt-live-chat-paid-message-renderer #author-photo,
    yt-live-chat-legacy-paid-message-renderer #author-photo {
      display: none !important;
      width: 24px !important;
      height: 24px !important;
      border-radius: 24px !important;
      margin-right: 6px !important;
    }
    
    yt-live-chat-text-message-renderer #author-badges {
      display: none !important;
      vertical-align: text-top !important;
    }
    
    yt-live-chat-text-message-renderer #timestamp {
      color: #ffffff !important;
      font-family: "Imprima";
      font-size: 16px !important;
      line-height: 16px !important;
    }
    
    /* Nama channel owner */
    
    yt-live-chat-text-message-renderer #author-name[type="owner"],
    yt-live-chat-text-message-renderer #author-name.owner,
    yt-live-chat-text-message-renderer
      yt-live-chat-author-badge-renderer[type="owner"] {
      color: var(--owner-color) !important;
      border: 2px solid var(--owner-color);
      background-color: #fff !important;
      padding: 10px !important;
      border-radius: 20px 20px 20px 0px !important;
    }
    
    /* Nama channel moderator */
    
    yt-live-chat-text-message-renderer #author-name[type="moderator"],
    yt-live-chat-text-message-renderer #author-name.moderator {
      color: var(--moderator-color) !important;
      border: 2px solid var(--moderator-color);
      background-color: #fff !important;
      padding: 10px !important;
      border-radius: 20px 20px 20px 0px !important;
    }
    
    /* Buat ngilangiin badge tang biru */
    
    yt-live-chat-text-message-renderer
      yt-live-chat-author-badge-renderer[type="moderator"] {
      display: none !important;
    }
    
    /* Nama channel membership */
    
    yt-live-chat-text-message-renderer #author-name[type="member"],
    yt-live-chat-text-message-renderer #author-name.member,
    yt-live-chat-text-message-renderer
      yt-live-chat-author-badge-renderer[type="member"] {
      border: 2px solid var(--member-color);
      color: var(--member-color) !important;
      background-color: #fff !important;
      padding: 10px !important;
      border-radius: 20px 20px 20px 0px !important;
    }
    
    /* Nama channel viewer biasa */
    
    yt-live-chat-text-message-renderer #author-name {
      background-color: var(--general-color) !important;
      border: 2px solid var(--general-color);
      padding: 10px !important;
      border-radius: 20px 20px 20px 0px !important;
      color: #fff !important;
      font-family: "Changa One";
      font-size: 20px !important;
      line-height: 20px !important;
    }
    
    /* Isi pesan */
    
    yt-live-chat-text-message-renderer #message,
    yt-live-chat-text-message-renderer #message * {
      color: #000000 !important;
      font-family: "Imprima";
      font-size: 18px !important;
      line-height: normalpx !important;
      letter-spacing: normalpx !important;
    }
    
    yt-live-chat-paid-message-renderer #author-name,
    yt-live-chat-paid-message-renderer #author-name *,
    yt-live-chat-legacy-paid-message-renderer #event-text,
    yt-live-chat-legacy-paid-message-renderer #event-text * {
      color: #ffffff !important;
      font-family: "Changa One";
      font-size: 20px !important;
      line-height: 20px !important;
    }
    
    yt-live-chat-paid-message-renderer #purchase-amount,
    yt-live-chat-paid-message-renderer #purchase-amount *,
    yt-live-chat-legacy-paid-message-renderer #detail-text,
    yt-live-chat-legacy-paid-message-renderer #detail-text * {
      color: #ffffff !important;
      font-family: "Imprima";
      font-size: 18px !important;
      line-height: 18px !important;
    }
    
    yt-live-chat-paid-message-renderer #content,
    yt-live-chat-paid-message-renderer #content * {
      color: #ffffff !important;
      font-family: "Imprima";
      font-size: 18px !important;
      line-height: 18px !important;
    }
    
    yt-live-chat-moderation-message-renderer {
      display: none !important;
    }
    
    yt-live-chat-paid-message-renderer {
      margin: 4px 0 !important;
    }
    
    yt-live-chat-legacy-paid-message-renderer {
      background-color: var(--member-color) !important;
      margin: 4px 0 !important;
    }
    
    yt-live-chat-text-message-renderer a,
    yt-live-chat-legacy-paid-message-renderer a {
      text-decoration: none !important;
    }
    
    yt-live-chat-text-message-renderer[is-deleted],
    yt-live-chat-legacy-paid-message-renderer[is-deleted] {
      display: none !important;
    }
    
    yt-live-chat-ticker-renderer {
      background-color: transparent !important;
      box-shadow: none !important;
    }
    
    yt-live-chat-ticker-renderer {
      display: none !important;
    }
    
    yt-live-chat-ticker-paid-message-item-renderer,
    yt-live-chat-ticker-paid-message-item-renderer *,
    yt-live-chat-ticker-sponsor-item-renderer,
    yt-live-chat-ticker-sponsor-item-renderer * {
      color: #ffffff !important;
      font-family: "Imprima";
    }
    
    yt-live-chat-mode-change-message-renderer,
    yt-live-chat-viewer-engagement-message-renderer,
    yt-live-chat-restricted-participation-renderer {
      display: none !important;
    }
    
    yt-live-chat-banner-manager {
      display: none !important;
    }
    
    yt-live-chat-action-panel-renderer,
    yt-live-chat-renderer #action-panel {
      display: none !important;
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
              <code className="md:max-w-xs h-36 w-[80vw] overflow-scroll md:w-72 backdrop-blur-2xl rounded-b-md rounded-bl-md  bg-opacity-5 bg-aksen p-4 relative">
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
      <Buttons
        LinkDir="/"
        Apah="Back Home"
        LinkDir1="/apps/templates"
        Apah1="Templates Menu"
      />
    </div>
  );
}

export default templates1;
