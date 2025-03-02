"use client";
import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import { capLetters, formatBirthdate } from "@/app/helpers/helper";
import { useState } from "react";
import Image from "next/image";
import ReviewSettingIcons from "./ReviewSettingIcons";
import Headline from "@/app/components/uicomponents/Headline";
import Title from "@/app/components/uicomponents/Title";
import SpanText from "@/app/components/uicomponents/SpanText";

const UserReviews = ({ data }) => {
  const [reviews, setReviews] = useState(data);

  const handleDelete = (reviewId) => {
    setReviews((prev) => prev.filter((r) => r.reviewId !== reviewId));
  };

  return (
    <div className="base-padding lg:w-2/4 space-y-5 flex-center flex-col">
      {reviews.length > 0 ? (
        <>
          {reviews.map((item) => {
            const { id, artistName, artistImage, header, createdAt, comment } =
              item;
            return (
              <Spotlight
                className="relative bg-black p-3 w-full flex flex-col lg:flex-row"
                key={id}
              >
                <WhiteSvg />
                <ReviewSettingIcons
                  item={item}
                  artistId={item.artistId}
                  reviewId={item.reviewId}
                  onDelete={handleDelete}
                />
                <div className="flex lg:items-center flex-col lg:space-x-2 mr-3 w-2/4 lg:w-[25%] z-[5]">
                  <div className="w-full h-40 relative">
                    <WhiteSvg />
                    <Image
                      className="w-full h-full object-cover hover-image p-1"
                      src={artistImage}
                      alt="artist"
                      width={200}
                      height={200}
                      priority
                      quality={100}
                    />
                  </div>
                  <Title>{artistName}</Title>
                </div>
                <div className="space-y-2 lg:w-[75%]">
                  <Title>{header}</Title>
                  <SpanText>{formatBirthdate(createdAt)}</SpanText>
                  <Paragraph>{capLetters(comment)}</Paragraph>
                </div>
              </Spotlight>
            );
          })}
        </>
      ) : (
        <div>
          <Headline>You have no reviews at this time</Headline>
        </div>
      )}
    </div>
  );
};

export default UserReviews;
