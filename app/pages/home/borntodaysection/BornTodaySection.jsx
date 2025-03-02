import EmptyField from "@/app/components/EmptyField";
import Headline from "@/app/components/uicomponents/Headline";
import BornList from "./BornList";

const BornTodaySection = ({ data }) => {
  const fake = 3;

  return (
    <section className="base-padding bg-black space-y-2 relative ">
      <Headline className="text-green">Born Today</Headline>
      {fake > 0 ? (
        <BornList />
      ) : (
        <EmptyField className="text-black">no born today</EmptyField>
      )}
    </section>
  );
};

export default BornTodaySection;
