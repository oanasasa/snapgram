import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { useInView } from "react-intersection-observer";
import Loader from "@/components/shared/Loader";
import { useEffect } from "react";
import GridUserList from "@/components/shared/GridUserList";

const AllUsers = () => {
  const { ref, inView } = useInView();
  const { data: users, fetchNextPage, hasNextPage } = useGetUsers();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (!users) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="user-container">
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="h3-bold md:h2-bold w-full">All users</h3>
      </div>

      <div className="flex flex-wrap gap-5 w-full max-w-5xl">
        {users.pages.map((item, index) => (
          <GridUserList key={`page-${index}`} users={item?.documents} />
        ))}
      </div>

      {hasNextPage && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
