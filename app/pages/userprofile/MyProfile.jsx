import ProfileHeader from "./headersection/ProfileHeader";
import ProfileContent from "./profilecontent/ProfileContent";

const MyProfile = ({ data }) => {
  return (
    <section>
      <ProfileHeader data={data} />
      <ProfileContent data={data} />
    </section>
  );
};

export default MyProfile;
