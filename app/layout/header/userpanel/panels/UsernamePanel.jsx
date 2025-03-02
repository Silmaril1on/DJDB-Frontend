import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDetails } from "@/app/features/userSlice";
import { fetchUserDetails } from "@/app/utils/api";
import UserSettingsPanel from "./UserSettingsPanel";
import DropDown from "./DropDown";
import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";

const UsernamePanel = () => {
  const { user, userDetails } = useSelector((store) => store.user);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => setActive(!active);
  const handleMouseLeave = () => setActive(false);

  useEffect(() => {
    const userDetails = async () => {
      try {
        const data = await fetchUserDetails(user.token);
        dispatch(getUserDetails(data));
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    userDetails();
  }, [dispatch, user]);

  return (
    <div className="flex-center space-x-4 relative">
      <div
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        className="flex-center space-x-1 cursor-pointer"
      >
        {userDetails?.image && (
          <Image
            className="w-6 h-6 rounded-full hidden lg:block lg:mr-2"
            src={userDetails.image}
            alt="profile"
            width={50}
            height={50}
            priority
          />
        )}
        <Title className="font-bold">{user.username}</Title>
        <DropDown active={active} />
      </div>
      {active && <UserSettingsPanel setActive={setActive} />}
    </div>
  );
};

export default UsernamePanel;
