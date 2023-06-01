export default function Buttons({
  LinkDir,
  Apah,
  LinkDir1,
  Apah1,
  LinkDir2,
  Apah2,
}) {
  return (
    <div className="flex justify-center mt-5 flex-col lg:flex-row cursor-pointer text-center">
      <a
        className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-16 font-semibold text-white align-middle bg-secondary hover:bg-aksen mx-auto"
        href={LinkDir}
      >
        {Apah}
      </a>
      <a
        className="hover:ease-in-out hover:duration-300 my-2 lg:mx-2 rounded-lg py-2 px-12 font-semibold text-secondary align-middle text-center bg-white hover:bg-aksen hover:text-white mx-auto"
        href={LinkDir1}
      >
        {Apah1}
      </a>
    </div>
  );
}
