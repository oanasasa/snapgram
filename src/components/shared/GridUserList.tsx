import { Models } from "appwrite";
import { Link } from "react-router-dom";

type GridUserListProps = {
  users?: Models.Document[];
};
const GridUserList = ({ users }: GridUserListProps) => {
  return (
    <ul className="user-grid">
      {users?.map((user) => (
        <Link to={`/profile/${user.$id}`}>
          <li key={user.$id} className="user-box">
            <img
              src={user.imageUrl}
              alt="avatar"
              className="object-cover rounded-full"
              width={100}
              height={100}
            />
            <p>{user.name}</p>
            <p className="subtle-semibold lg:small-regular text-light-3">
              {user.username}
            </p>
            <p
              className={`${user.bio ? "user-bio" : "hidden"} lg:small-regular`}
            >
              {user.bio}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default GridUserList;
