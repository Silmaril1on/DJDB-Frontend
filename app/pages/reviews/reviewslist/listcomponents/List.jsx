import ReviewLikeButtons from "./ReviewLikeButtons";
import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import Title from "@/app/components/uicomponents/Title";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import { capLetters } from "@/app/helpers/helper";

const List = ({ reviewsData, data }) => {
  return (
    <>
      {reviewsData.map((item) => {
        const { username, comment, header, createdAt, _id } = item;
        return (
          <Spotlight
            key={_id}
            className="relative bg-black w-full lg:shadow-sm lg:shadow-neutral-600"
          >
            <WhiteSvg />
            <div className="relative space-y-3 px-4 py-3" key={_id}>
              <article className="relative py-3 flex-center text-white flex-col space-y-3">
                <Title>{header}</Title>
                <Paragraph size={2}>{capLetters(comment)}</Paragraph>
                <HorizontalLine className="w-2/4 absolute bottom-0" />
                <ReviewLikeButtons review={item} artistId={data._id} />
              </article>
              <article className="flex-center flex-row space-x-3">
                <h1 className="text-white pointer-events-none">{username}</h1>
                <span>•</span>
                <Paragraph>{createdAt.split("T")[0]}</Paragraph>
              </article>
            </div>
          </Spotlight>
        );
      })}
    </>
  );
};

export default List;
