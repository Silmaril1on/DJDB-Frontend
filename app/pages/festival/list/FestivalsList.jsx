import Image from "next/image";
import FestArticle from "./FestArticle";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";

const FestivalsList = ({ data }) => {
  return (
    <div className="base-padding flex-center flex-col space-y-10 bg-neutral-900">
      {data.map((item) => {
        return (
          <div
            className="w-full md:w-2/4 flex-center flex-col space-y-3 bg-black p-1"
            key={item._id}
          >
            <div className="w-full lg:h-[400px] relative">
              <GreenSvg />
              <Image
                className="w-full h-full object-cover hover-image p-1"
                width={1000}
                height={1000}
                src={item.image}
                alt={item.name}
                quality={100}
                priority
              />
            </div>
            <FestArticle item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default FestivalsList;
