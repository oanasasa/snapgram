// import PostForm from "@/components/forms/PostForm";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import { formatDate } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
    const {id} = useParams();
    const {data: user, isPending} = useGetUserById(id || '') 

    console.log(user);

    // const {User} = useUserContext();

    const handleDeletePost = () =>{

    }
    return (
        <div className="post_details-container">
            {isPending ? <Loader/> : (
                <div className="post_details-card">
                    <img src={user?.imageUrl} alt="post" className="post_details-img"/>
                    <div className="post_details-info">
                        <div className="flex-between w-full">
                                <div className="flex flex-col">
                                    <p className="base-medium lg:body-bold text-light-1">
                                    {user?.name}
                                    </p>
                                    <div className="flex-center gap-2 text-light-3">
                                        <p className="subtle-semibold lg:small-regular">
                                            {formatDate(user?.$createdAt || '')}
                                        </p> 
                                        -
                                        <p className="subtle-semibold lg:small-regular">
                                            {user?.location}
                                        </p>
                                        
                                    </div>
                                    <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
                                        <p>{user?.bio}</p>
                                    </div>
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
                        <hr className="border w-full border-dark-4/80" />
                        
                        <div className="w-full">
                            {/* <PostStats post={post} userId={user.id}/> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
