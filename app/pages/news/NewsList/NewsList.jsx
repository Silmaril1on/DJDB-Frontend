import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const NewsList = ({ data }) => {
  return (
    <section className="base-padding w-full xl:w-[70%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5">
        {data.map((item) => {
          return (
            <Spotlight
              className="w-full lg:w-72 p-1 relative flex bg-black"
              key={item._id}
            >
              <WhiteSvg />
              <div className="flex justify-between w-full items-center flex-col relative z-[3]">
                <div className="w-full">
                  <div className="h-44">
                    <Image
                      className="object-cover w-full h-full hover-image "
                      width={500}
                      height={500}
                      src={item.poster}
                      quality={80}
                      alt={item.headline}
                    />
                  </div>
                  <article className="space-y-2 *:text-center flex-center flex-col ">
                    <Title>{item.headline}</Title>
                    <Paragraph>{item.desc}</Paragraph>
                  </article>
                </div>
                <LinkComponent
                  className="z-[3] relative"
                  href={item.newsLink}
                  target="_blank"
                >
                  <span>View Details</span>
                  <FaCaretRight />
                </LinkComponent>
              </div>
            </Spotlight>
          );
        })}
      </div>
    </section>
  );
};

export default NewsList;
