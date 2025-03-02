import StageName from "@/app/components/artistcomponents/StageName";
import Spinner from "@/app/components/Spinner";
import Title from "@/app/components/uicomponents/Title";

const Scores = ({ rating, item }) => {
  return (
    <div className="flex-center flex-col space-y-4">
      <Title size={1}>rate</Title>
      <StageName size={30} item={item} />
      <div className="flex-center w-16 h-8">
        <span className="text-end text-5xl pr-1 w-8 font-bold">
          {rating === 0 ? <Spinner /> : `${rating}`}
        </span>
        <span className="text-xl text-gray-400">/10</span>
      </div>
    </div>
  );
};

export default Scores;
