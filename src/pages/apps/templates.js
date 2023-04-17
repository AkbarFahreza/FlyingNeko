import { useState } from "react";
import LCMenusCard from "./components/LCMenuCards";
export default function TemplatesMenu() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  function handleMouseMove(event) {
    setMousePos({ x: event.clientX, y: event.clientY });
  }
  return (
    <div
      className="px-4 flex flex-wrap py-5 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <LCMenusCard
        Tamnel="https://trakteer.id/storage/images/content/l0865yej9k63bgme/ct-m5m7xmrNXVziWa9znJc9qHU1ifkDiPYv1679830413.jpg"
        Judul='[ Template 1 ] Youtube Live Chat Widget/Overlay "Rounded Border"'
        TemplateLink="https://trakteer.id/Revii/showcase/live-chat-overlay-template-1-svNNs"
        LinkEdit="templates/template1"
      />
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
