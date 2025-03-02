"use client";
import Button from "@/app/components/uicomponents/Button";
import Headline from "@/app/components/uicomponents/Headline";
import { setProfileToggle } from "@/app/features/modalSlice";
import { formatBirthdate } from "@/app/helpers/helper";
import { IoCalendarNumber } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const UserDetails = ({ data }) => {
  const dispatch = useDispatch();
  const { username, createdAt } = data;
  const { profileToggle } = useSelector((store) => store.modal);

  const handleEdit = () => {
    dispatch(setProfileToggle(!profileToggle));
  };

  return (
    <div className="flex flex-col justify-between ml-3">
      <div className="flex flex-col space-y-3 mb-3">
        <Headline>{username}</Headline>
        <div className="inline-flex items-center space-x-1 flex-row text-lightgray">
          <IoCalendarNumber size={25} />
          <span className="text-[10px] md:text-sm font-secondary">
            Joined <span>{formatBirthdate(createdAt)}</span>
          </span>
        </div>
      </div>
      <Button className="green-btn" onClick={handleEdit}>
        {profileToggle ? "edit profile" : "my activities"}
      </Button>
    </div>
  );
};

export default UserDetails;
