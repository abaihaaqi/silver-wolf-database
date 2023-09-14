import Image from "next/image";

export type CharCardProps = {
  id: number;
  name: string;
  element: string;
  preview: string;
};

export default async function CharCard({
  id,
  name,
  element,
  preview,
}: CharCardProps) {
  return (
    <div className="relative border border-white p-3 rounded-lg">
      <Image
        src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${preview}`}
        alt="Character Image"
        width={256}
        height={256}
        className="rounded-full bg-slate-600"
      />
      <p>{id}</p>
      <p>{name}</p>
      <p>{element}</p>
      <p>{preview}</p>
    </div>
  );
}
