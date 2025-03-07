import BornSlider from "../BornSlider";
import Desktop from "./Desktop";
import dummydata from "@/app/localdb/dummyborndata";

const DummyData = () => {
  return (
    <div>
      <Desktop data={dummydata} />
      <BornSlider data={dummydata} />
    </div>
  );
};

export default DummyData;
