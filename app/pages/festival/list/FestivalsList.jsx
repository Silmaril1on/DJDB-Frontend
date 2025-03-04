import Image from "next/image";
import FestArticle from "./FestArticle";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";

const FestivalsList = ({ data }) => {
  return (
    <div className="base-padding flex-center flex-col space-y-10 bg-neutral-900">
      {data.map((item) => {
        return (
          <div
            className="w-full md:w-2/4 flex-center flex-col space-y-3 bg-black p-1 max-w-[750px]"
            key={item._id}
          >
            <div className="w-full h-[250px] lg:h-[450px] relative">
              <GreenSvg />
              <Image
                className="w-full h-full object-cover hover-image p-1"
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                quality={80}
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
