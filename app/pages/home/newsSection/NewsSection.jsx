"use client";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import ActiveNews from "./activenews/ActiveNews";
import ThumbsNews from "./ThumbsNews";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";

const NewsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col bg-black">
      <div className="px-3 lg:px-5 w-fit">
        <LinkComponent href="/news">
          <span>View All News</span>
          <FaCaretRight />
        </LinkComponent>
      </div>

      <div className="flex flex-col lg:flex-row w-full px-3 lg:px-5 lg:pb-5">
        <ActiveNews
          news={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <ThumbsNews
          news={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
};

export default NewsSection;
