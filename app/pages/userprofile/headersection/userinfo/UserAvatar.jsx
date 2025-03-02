import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Image from "next/image";

const UserAvatar = ({ data }) => {
  return (
    <div className="lg:w-48 w-32 lg:h-52 p-1 relative">
      <WhiteSvg />
      {data?.image ? (
        <Image
          className="hover-image w-full h-full object-cover"
          src={data.image}
          alt="user-avatar"
          width={400}
          height={400}
          priority
        />
      ) : (
        <div className="flex-center h-full bg-pink/20">
          <h1>Upload your image</h1>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
