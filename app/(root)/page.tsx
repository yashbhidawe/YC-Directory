import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
