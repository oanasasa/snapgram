import UserCard from "./UserCard"

const UsersSidebar = () => {
  return (
    <div className="usersidebar">
      <h2 className="h3-bold md:h2-bold text-left w-full">Top Creators</h2>
      <div className="flex flex-2">
        <ul>
           {
            <li>
                <UserCard />
            </li>
           }
        </ul>
      </div>
    </div>
  )
}

export default UsersSidebar
