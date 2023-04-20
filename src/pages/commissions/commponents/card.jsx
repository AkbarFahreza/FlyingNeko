import React from "react";

export default function Card({
  cardBg,
  btnBg,
  btnClr,
  Paket,
  Basics,
  children,
}) {
  const items = React.Children.toArray(Basics);
  return (
    <div
      className=" max-h-[500px] min-h-[500px] flex justify-center flex-col rounded-lg px-6 relative"
      style={{ backgroundColor: cardBg }}
    >
      <div className=" flex flex-col justify-center mb-14">
        <h1
          className=" text-white text-2xl font-bold  py-4 px-10 mb-10 text-center rounded-full"
          style={{ backgroundColor: btnBg, color: btnClr }}
        >
          {Paket}
        </h1>
        <ul className="max-w-xs mb-4 space-y-4" style={{ color: btnBg }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
