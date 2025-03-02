import Image from "next/image";

const CardImage = ({ item }) => {
  return (
    <div className="w-full h-64 overflow-hidden">
      <Image
        className="brightness-90 group-hover:brightness-100 duration-300 w-full h-full object-cover"
        src={item.image}
        width={500}
        height={500}
        alt={item.name}
        priority
        quality={100}
      />
    </div>
  );
};

export default CardImage;
