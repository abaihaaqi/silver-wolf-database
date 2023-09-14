import CharCard from "@/components/CharCard";

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_min/en/characters.json"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Characters() {
  const data = await getData();
  const charData = Object.values(data);

  const filteredCharData = charData.filter((item: any) => item.id == 1001);

  return (
    <div>
      {filteredCharData.map((char: any) => (
        <CharCard
          key={char.id}
          id={char.id}
          name={char.name}
          element={char.element}
          preview={char.icon}
        />
      ))}
    </div>
  );
}
