import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Title from "@/app/components/uicomponents/Title";
import { formatBirthdate, truncateString } from "@/app/helpers/helper";
import Image from "next/image";

const DesktopReviews = ({ items }) => {
  return (
    <div className="lg:grid hidden grid-cols-2 gap-6">
      {items.map((item) => {
        const displayName = item.artist.stageName || item.artist.name;
        return (
          <Spotlight className="relative bg-black p-2" key={item.id}>
            <WhiteSvg />
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-10 h-10 relative">
                <WhiteSvg />
                <Image
                  className="w-full h-full object-cover"
                  src={item.artist.image}
                  alt="artist"
                  width={200}
                  height={200}
                  quality={80}
                />
              </div>
              <Title>{displayName}</Title>
            </div>
            <HorizontalLine />
            <div className="space-y-2 mt-1">
              <Title>{truncateString(item.header, 50)}</Title>
              <span className="text-[8px] text-lightgray font-secondary">
                {formatBirthdate(item.createdAt)}
              </span>
              <p className="text-sm text-lightgray font-secondary">
                {truncateString(item.comment, 300)}
              </p>
            </div>
          </Spotlight>
        );
      })}
    </div>
  );
};

export default DesktopReviews;
