// import PostForm from "@/components/forms/PostForm";
import Loader from "@/components/shared/Loader";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { data: user, isPending } = useGetUserById(id || "");

  console.log(user);

  // const {User} = useUserContext();

  // const handleDeletePost = () => {};
  return (
    <div className="profile-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="profile-inner_container">
          <img
            src={user?.imageUrl}
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {user?.name}
            </p>
            <p className="flex-center flex-col gap-2 text-light-3">
              @{user?.username}
            </p>

            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{user?.bio}</p>
            </div>

            {/* add username and email, updatedat, and no bio text if not found above + need update and delete buttons + under some profile stats - how manny posts / likes / saves */}
            {/* <div className="flex-center">
                                <Link to={`/update-profile/${user?.$id}`} className={`${currentUser.id !== user?.$id && 'hidden'}`}>
                                    <img src="/assets/icons/edit.svg" width={24} height={24} alt="edit"/>
                                </Link>
                                <Button onClick={handleDeletePost} variant="ghost" className={`ghost_details-delete_btn ${currentUser.id !== user?.$id && 'hidden'}`}>
                                    <img src="/assets/icons/delete.svg" alt="delete" width={24} height={24} />
                                </Button>
                            </div> */}
          </div>

          <div className="w-full">
            {/* <PostStats post={post} userId={user.id}/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
