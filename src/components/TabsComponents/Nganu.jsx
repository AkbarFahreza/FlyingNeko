import Link from "next/link";
const CobaDeh = ({ Nganu, Mana, TombolNganu }) => {
  return (
    <div className="flex flex-row justify-between align-middle">
      <code>{Nganu}</code>
      <div className="flex align-text-bottom">
        <Link
          href={Mana}
          className="py-1 px-2 rounded-md bg-secondary hover:ease-in-out hover:duration-300 hover:bg-aksen"
        >
          {TombolNganu}
        </Link>
      </div>
    </div>
  );
};

export default CobaDeh;