import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Enterprenuer
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on pitches, Get noticed in Virtual Competitions
        </p>
      </section>
    </>
  );
}
