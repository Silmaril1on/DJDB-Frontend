"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";
import { truncateString } from "@/app/helpers/helper";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import Title from "@/app/components/uicomponents/Title";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const UserRecents = ({ title, fetchDataFn, showRating = false }) => {
  const [items, setItems] = useState(null);
  const { user } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      if (!user?.token) return;
      setLoading(true);
      try {
        const data = await fetchDataFn(user.token);
        setItems(data);
      } catch (error) {
        console.error(`Error fetching ${title.toLowerCase()}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [user?.token, fetchDataFn, title]);

  return (
    <Spotlight className="px-2 w-[50%] lg:w-full relative bg-black py-2 shadow-sm shadow-neutral-600">
      <WhiteSvg />
      <Title className="px-2">{title}</Title>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {items && items.length > 0 ? (
            <motion.div
              variants={staggerOpacity}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-3 lg:grid-cols-6 gap-2 space-x-2 my-4 z-10 relative"
            >
              {items.map((item) => {
                const { stageName, name, image, _id, rating } = item;
                const displayName = stageName || name;
                return (
                  <motion.div
                    key={_id}
                    variants={staggerOpacity}
                    className="*:flex-center *:flex-col relative"
                  >
                    <Link href={`/artists/${_id}`}>
                      <Image
                        width={150}
                        height={150}
                        alt={name}
                        src={image}
                        className="w-20 h-20 mb-1 object-cover rounded-full hover-image"
                      />
                      {showRating && <RatingIndex rating={rating} />}
                      <h1 className="text-[12px] xl:text-sm capitalize">
                        {truncateString(displayName)}
                      </h1>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <p className="text-center py-4 text-gray-400">
              No {title.toLowerCase()}
            </p>
          )}
        </>
      )}
    </Spotlight>
  );
};

const RatingIndex = ({ rating }) => {
  return (
    <div
      className={`absolute -top-1 right-0 w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold ${
        rating >= 8
          ? "bg-green/70"
          : rating >= 4
          ? "bg-purple/70"
          : "bg-pink/70"
      }`}
    >
      {rating}
    </div>
  );
};

export default UserRecents;
