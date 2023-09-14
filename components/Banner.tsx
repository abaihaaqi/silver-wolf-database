import Image from "next/image";
import newCharacterImg from "@/public/image/character_preview/1208.png";
import newCharacterElementImg from "@/public/icon/path/Preservation.png";

export default function Banner() {
  const newCharacter = {
    name: "Fu Xuan",
    path: "Preservation",
    desc: "Head of the Divination Commission on the Luofu. The person who uses the third eye and Matrix of Prescience to foretell the route of Xianzhou and the outcomes of events.",
    img: newCharacterImg,
    pathImg: newCharacterElementImg,
  };

  return (
    <div className="h-canvas flex flex-col justify-center items-center gap-6 text-center">
      <div>
        <h1 className="font-isometric-3d font-bold text-2xl">New Character</h1>
        <p>Version 1.3</p>
      </div>
      <div>
        <div className="relative bg-app-gradient-to-b w-[242px] flex justify-center">
          <Image
            src={newCharacter.img}
            alt={`${newCharacter.name} image`}
            className="bg-black w-60"
          />
          <h2 className="absolute bottom-0 font-bold text-lg">Fu Xuan</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-1">
            <Image
              src={newCharacter.pathImg}
              alt={`${newCharacter.name} path image`}
              width={24}
            />
            <p>{newCharacter.path}</p>
          </div>
        </div>
      </div>
      <div className="w-80">{newCharacter.desc}</div>
    </div>
  );
}
