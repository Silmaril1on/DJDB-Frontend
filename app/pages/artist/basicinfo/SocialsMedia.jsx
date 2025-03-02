import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa";
import { FaXTwitter, FaSoundcloud } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { iconsVariant } from "@/app/animations/motionValues";

const SocialsMedia = ({ data }) => {
  const socials = data.profiles;
  const metaScore = data?.ratingStats.metaScore;

  return (
    <motion.div
      variants={iconsVariant}
      initial="hidden"
      animate="visible"
      className="space-x-5 flex flex-row py-5"
    >
      {socials.map((item) => {
        const { name } = item;
        return (
          <Link target="_black" key={item._id} href={item.link}>
            <motion.span
              variants={iconsVariant}
              className={`text-xl duration-300 ${
                metaScore >= 75
                  ? "text-green/80 hover:text-green"
                  : metaScore >= 45
                  ? "text-purple/80 hover:text-purple"
                  : "text-pink/80 hover:text-pink"
              }`}
            >
              {name === "soundcloud" ? (
                <FaSoundcloud />
              ) : name === "facebook" ? (
                <FaFacebook />
              ) : name === "spotify" ? (
                <FaSpotify />
              ) : name === "youtube" ? (
                <FaYoutube />
              ) : name === "x" ? (
                <FaXTwitter />
              ) : name === "instagram" ? (
                <FaInstagram />
              ) : name === "tiktok" ? (
                <FaTiktok />
              ) : name === "web" ? (
                <GrLanguage />
              ) : (
                ""
              )}
            </motion.span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default SocialsMedia;
