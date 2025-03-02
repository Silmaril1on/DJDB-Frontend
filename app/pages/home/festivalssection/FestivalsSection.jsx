import Headline from "@/app/components/uicomponents/Headline";
import FestivalList from "./FestivalList";

const FestivalsSection = ({ data }) => {
  return (
    <section className="base-padding bg-black relative">
      <Headline className="text-green mb-3">Browse Festivals</Headline>
      <FestivalList data={data} />
    </section>
  );
};

export default FestivalsSection;
