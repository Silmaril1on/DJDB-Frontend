import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import { useLogout } from "@/app/hooks/useLogOut";
import { MdLogout, MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";

const menuItems = [
  { href: "/myprofile", icon: <CgProfile />, label: "My Profile" },
  { href: "/favorites", icon: <MdFavoriteBorder />, label: "My Favorites" },
  { href: "/reviews", icon: <FaBookOpen />, label: "My Reviews" },
];

const UserSettingsPanel = ({ setActive, handleClick }) => {
  const { logout } = useLogout();
  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      animate="visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute backdrop-blur-lg p-1 bg-neutral-900/70 top-6 lg:top-8 z-10 right-0 w-44"
    >
      <WhiteSvg />
      <div className="relative p-3 w-full h-full flex items-end flex-col">
        <div className="relative z-[4] *:flex *:justify-end">
          {menuItems.map(({ href, icon, label }) => (
            <motion.div
              onClick={handleClick}
              key={href}
              variants={staggerOpacity}
            >
              <LinkComponent href={href}>
                {icon}
                <span>{label}</span>
              </LinkComponent>
            </motion.div>
          ))}
          <motion.div variants={staggerOpacity}>
            <LinkComponent href="/" onClick={logout}>
              <MdLogout />
              <span>Logout</span>
            </LinkComponent>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserSettingsPanel;
