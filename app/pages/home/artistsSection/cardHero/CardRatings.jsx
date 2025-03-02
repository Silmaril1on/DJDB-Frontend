import MetaScoreColors from "@/app/components/artistcomponents/MetaScoreColors";
import { setWarning } from "@/app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const CardRatings = ({ item, onRate }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onArtistRate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      dispatch(setWarning(true));
      return;
    }
    onRate();
  };

  return (
    <div
      onClick={onArtistRate}
      className="relative cursor-pointer inline-block"
    >
      <MetaScoreColors item={item} />
    </div>
  );
};

export default CardRatings;
