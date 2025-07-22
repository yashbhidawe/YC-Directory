import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      author: {
        _id: 1,
        name: "Dimple",
      },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1647592805369-43d6dfbdb704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "girl",
      title: "girl",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Enterprenuer
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on pitches, Get noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts &&
            posts.map((post: StartupCartType) => (
              <StartupCard key={post?._id} post={post} />
            ))}
        </ul>
      </section>
    </>
  );
}
