import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";

import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savedPosts = currentUser?.save
    .map((savedPost: Models.Document) => ({
      ...savedPost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  console.log(savedPosts);

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <h2 className="h3-bold md:h2-bold w-full flex gap-3">
          <img
            src="/assets/icons/saved.svg"
            width={30}
            height={30}
            alt="saved"
            className="invert-white"
          />
          Saved Posts
        </h2>
      </div>

      {!currentUser ? (
        <Loader />
      ) : (
        <ul>
          {savedPosts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList posts={savedPosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
