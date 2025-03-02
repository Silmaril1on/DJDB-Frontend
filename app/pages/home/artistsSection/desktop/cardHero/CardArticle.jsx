import StageName from "@/app/components/artistcomponents/StageName";
import CardRatings from "./CardRatings";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";

const CardArticle = ({ item, onRate }) => {
  return (
    <article className="space-y-1 w-full">
      <StageName
        className=" text-lightgray group-hover:text-white duration-300 pt-1"
        item={item}
      />
      <NationalityDetails item={item} />
      <CardRatings onRate={onRate} item={item} />
    </article>
  );
};

export default CardArticle;
