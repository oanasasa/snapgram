import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import GridUserList from "@/components/shared/GridUserList";

const AllUsers = () => {
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (!creators) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="user-container">
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="lg:h2-bold h3-bold w-full">All users</h3>
      </div>

      <div className="flex flex-wrap gap-5 w-full max-w-5xl">
        {isUserLoading ? (
          <Loader />
        ) : (
          <GridUserList users={creators?.documents} />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
