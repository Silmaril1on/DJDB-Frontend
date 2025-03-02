import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const UserFavoritesPanel = () => {
  const { userDetails } = useSelector((store) => store.user);

  return (
    <Link href="/favorites">
      <div className="hidden lg:flex-center flex-row px-2 space-x-2">
        <MdFavoriteBorder size={15} />
        <h1 className="text-sm">Favorites</h1>
        <span className="text-green text-[12px]">
          {userDetails?.favorites?.length || 0}
        </span>
      </div>
    </Link>
  );
};

export default UserFavoritesPanel;
