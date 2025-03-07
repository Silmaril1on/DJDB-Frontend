import Headline from "@/app/components/uicomponents/Headline";
import BornList from "./BornList";
import DummyData from "./dummy/DummyData";

const BornTodaySection = ({ data }) => {
  return (
    <section className="base-padding bg-black space-y-2 relative ">
      <Headline className="text-green">Born Today</Headline>
      {data.length > 0 ? <BornList data={data} /> : <DummyData />}
    </section>
  );
};

export default BornTodaySection;
