import Headline from "@/app/components/uicomponents/Headline";
import FestivalList from "./FestivalList";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const FestivalsSection = ({ data }) => {
  return (
    <section className="px-3 lg:px-5 py-10 bg-black relative">
      <Headline className="text-green mb-3">Browse Festivals</Headline>
      <Paragraph className="w-full lg:w-2/5 mb-5">
        Discover the best electronic music festivals worldwide. From legendary
        gatherings to underground raves, explore events that bring DJs,
        producers, and music lovers together for unforgettable experiences.
      </Paragraph>
      <FestivalList data={data} />
    </section>
  );
};

export default FestivalsSection;
