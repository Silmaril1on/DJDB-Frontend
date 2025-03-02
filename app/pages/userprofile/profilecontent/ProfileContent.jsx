"use client";

import { useSelector } from "react-redux";
import EditProfile from "./editprofile/EditProfile";
import { Activities } from "./activities/Activities";

const ProfileContent = ({ data }) => {
  const { profileToggle } = useSelector((store) => store.modal);

  return (
    <div>
      {profileToggle ? <Activities data={data} /> : <EditProfile data={data} />}
    </div>
  );
};

export default ProfileContent;
