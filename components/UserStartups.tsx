import { STARTUPS_BY_AUTHOR_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups: StartupTypeCard[] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups && startups.length > 0 ? (
        startups.map((startup) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No post yet</p>
      )}
    </>
  );
};

export default UserStartups;
