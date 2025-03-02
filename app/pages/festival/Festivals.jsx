import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";
import FestivalsList from "./list/FestivalsList";

const Festivals = ({ data }) => {
  return (
    <section>
      <SectionHeadline
        title="festivals"
        description="Discover the world's top electronic music festivals, where beats, lights, and energy come together. From legendary events to underground gatherings, explore the best places to experience live DJ sets and unforgettable moments."
      />
      <FestivalsList data={data} />
    </section>
  );
};

export default Festivals;
