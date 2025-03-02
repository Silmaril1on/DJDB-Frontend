import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import CardDetails from "./CardDetails";
import Link from "next/link";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Filter from "../Filter";

const Card = ({ favorites, setFavorites, setSortBy, sortBy }) => {
  return (
    <>
      <Filter setSortBy={setSortBy} sortBy={sortBy} />
      <div className="grid lg:grid-cols-4 gap-4 py-4 base-padding bg-neutral-900 ">
        <AnimatePresence>
          {favorites.map((item) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/artists/${item._id}`}>
                <div className="flex flex-row group bg-black relative">
                  <WhiteSvg />
                  <div className="w-[30%] h-[100px] overflow-hidden m-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      priority
                      quality={100}
                      className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="grow py-2 px-1 relative">
                    <CardDetails item={item} />
                    <RemoveButton item={item} setFavorites={setFavorites} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Card;
