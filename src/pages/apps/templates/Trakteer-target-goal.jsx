/* eslint-disable */
import React, { useState } from "react";
import Link from "next/link";
import Buttons from "@/components/Buttons";

function TrakteerTargeGoal() {
  const [firstColor, setFirstColor] = useState("#7d40ff");
  const [secondColor, setSecondColor] = useState("#e2389f");
  const [titleColor, setTitleColor] = useState("#750075");
  const [borderColor, setBorderColor] = useState("#750075");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [progressColor, setProgressColor] = useState(" #d400ff");
  const [targetColor, setTargetColor] = useState("#d400ff");
  const [css, setCss] = useState("");

  const firstColorChange = (event) => {
    setFirstColor(event.target.value);
  };
  const secondColorChange = (event) => {
    setSecondColor(event.target.value);
  };
  const bgColorChange = (event) => {
    setBgColor(event.target.value);
  };
  const titleColorChange = (event) => {
    setTitleColor(event.target.value);
  };
  const borderColorChange = (event) => {
    setBorderColor(event.target.value);
  };
  const progressColorChange = (event) => {
    setProgressColor(event.target.value);
  };
  const targetColorChange = (event) => {
    setTargetColor(event.target.value);
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
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
:root {
  --first-color: ${firstColor};
  --second-color: ${secondColor};
  --bg-color: ${bgColor};
  --title-color: ${titleColor};
  --target-color: ${targetColor};
  --outline: ${borderColor};
  --progress-color: ${progressColor}
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
  min-width: 300px;
}
.title {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: "Poppins", sans-serif !important;
  font-weight: 700 !important;
  font-size: 15px;
  color: var(--title-color);
}
#target {
  min-height: 60px;
  position: relative;
  background-color: var(--bg-color);
  padding: 10px;
}

.detail {
  color: var(--progress-color);
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 10px !important;
  align-self: baseline;
}
.progress-bar-container{
    font-size: 10px !important;
} 
.progress-bar-container {
  border:  2px solid var(--outline);
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  justify-self: center;
}
.progress-bar {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background: linear-gradient(
    65deg,
    var(--first-color),
    var(--second-color)
  ) !important;
}
#pageurl {
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
        Trakteer Target Goal Template CSS
      </Link>
      <p className="justify-center text-center mb-10">By Dek Reza</p>
      <div className="flex flex-col md:flex-row justify-evenly align-middle mx-auto md:space-x-72 px-10">
        <div id="customizing" className="mb-10 ">
          <div className="flex flex-col">
            <div id="colorDef">
              <div className="py-1 mr-2">First Color : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={firstColor}
                onChange={firstColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 mr-2">Second Color : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={secondColor}
                onChange={secondColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 mr-2 ">Background Color : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={bgColor}
                onChange={bgColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 mr-2 ">Title Color : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={titleColor}
                onChange={titleColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 rounded-full">Progress Color :</div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={progressColor}
                onChange={progressColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1  mr-2 rounded-full">Progress Outline : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={borderColor}
                onChange={borderColorChange}
              />
            </div>
            <div id="colorDef">
              <div className="py-1 mr-2  rounded-full">Target Color : </div>{" "}
              <input
                id="ColorSelector"
                type="color"
                value={targetColor}
                onChange={targetColorChange}
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="z-50 flex-col space-y-3 mx-auto">
            <div
              style={{
                backgroundColor: `${bgColor}`,
                borderRadius: 10 + "px",
                width: 320 + "px",
                height: 100 + "px",
              }}
            >
              <div className="p-3 relative">
                <div
                  className="font-bold"
                  style={{
                    color: `${titleColor}`,
                  }}
                >
                  Ini Judulnya
                </div>
                <div
                  className="w-full mx-auto bg-white rounded-full my-1"
                  style={{ border: `2px solid ${borderColor}` }}
                >
                  <div
                    style={{
                      borderTopLeftRadius: 15 + "px",
                      borderBottomLeftRadius: 15 + "px",
                      textAlign: "center",
                      width: 45 + "%",
                      background: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
                    }}
                  >
                    45%
                  </div>
                </div>
                <div
                  className="scale-75 absolute -bottom-3 -right-[10px]"
                  style={{ color: `${progressColor}` }}
                >
                  Rp 388.000 / Rp 5.000.000{" "}
                </div>
              </div>
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
              <code className="md:max-w-xs h-36 w-[80vw] overflow-scroll md:w-80 backdrop-blur-2xl rounded-b-md rounded-bl-md  bg-opacity-5 bg-aksen p-4 relative">
                <p>{css}</p>
              </code>
              <div className="-z-50">
                <span className="w-28 h-28 bg-purple-800 blur-lg rounded-full absolute -z-50 animate-rndm"></span>
                <span className="w-28 h-28 bg-aksen blur-lg rounded-full absolute -z-50 animate-rndmOne "></span>
              </div>
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

export default TrakteerTargeGoal;
