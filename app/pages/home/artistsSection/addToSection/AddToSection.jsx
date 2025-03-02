import FavoriteIcon from "./FavoriteIcon";

const AddToSection = ({ item }) => {
  return (
    <div className="flex justify-start w-full h-8 relative">
      <FavoriteIcon item={item} />
    </div>
  );
};

export default AddToSection;
