import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";
import ListSection from "./NewsList/ListSection";

const News = ({ data }) => {
  return (
    <section>
      <SectionHeadline
        title="latest news"
        description="Stay plugged into the ever-evolving world of electronic music with real-time updates on festivals, album drops, industry shifts, and emerging trends. From groundbreaking collaborations to behind-the-scenes stories, get the latest insights and never miss a beat in the global electronic scene."
      />
      <ListSection data={data} />
    </section>
  );
};

export default News;
