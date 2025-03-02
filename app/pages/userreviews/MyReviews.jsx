import UserReviews from "./myreviews/UserReviews";
import Header from "./Header";

const MyReviews = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <div className="bg-neutral-900">
        <UserReviews data={data} />
      </div>
    </div>
  );
};

export default MyReviews;
