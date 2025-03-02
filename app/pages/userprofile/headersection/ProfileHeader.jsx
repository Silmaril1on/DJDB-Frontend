import UserActivities from "./useractivities/UserActivities";
import UserInfo from "./userinfo/UserInfo";

const ProfileHeader = ({ data }) => {
  return (
    <div className="flex-center flex-col md:flex-row space-y-5 *:w-full lg:*:w-2/4 py-5 bg-neutral-900 px-3 lg:px-[8%]">
      <UserInfo data={data} />
      <UserActivities data={data} />
    </div>
  );
};

export default ProfileHeader;
