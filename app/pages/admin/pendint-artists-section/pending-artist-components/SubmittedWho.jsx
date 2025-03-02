import Image from "next/image";

const SubmittedWho = ({ item }) => {
  const displayName = item.data.stageName || item.data.name;

  return (
    <div className="flex-center flex-col">
      <Image
        className="w-14 h-14 object-cover"
        src={item.data.image}
        alt={item.data.name}
        width={200}
        height={200}
        priority
      />
      <h1 className="text-lightgray capitalize">{displayName}</h1>
    </div>
  );
};

export default SubmittedWho;
