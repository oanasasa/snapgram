import { useUserContext } from "@/context/AuthContext";


const UserCard = () => {
    const { user } = useUserContext();
    console.log(user);
  return (
    <div>
       <p>{ user.name}</p>
        <p> {user.username}</p>
    </div>
  )
}

export default UserCard
