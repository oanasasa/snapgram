import Loader from "@/components/shared/Loader";

import { useUserContext } from "@/context/AuthContext";

const Saved = () => {
  const { user } = useUserContext();

  if (!user) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="user-container">
      <div className="flex-between w-full max-w-5xl mb-7">
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
    </div>
  );
};

export default Saved;
