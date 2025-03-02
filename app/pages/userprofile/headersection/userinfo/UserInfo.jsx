import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";

const UserInfo = ({ data }) => {
  return (
    <div className="space-y-3 inline-flex flex-row py-1">
      <UserAvatar data={data} />
      <UserDetails data={data} />
    </div>
  );
};

export default UserInfo;
