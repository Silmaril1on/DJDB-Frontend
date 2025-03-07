import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import Link from "next/link";

const FestivalResult = ({ results, closeResult }) => {
  return (
    <>
      {results.festivals.length > 0 && (
        <div className="p-2 space-y-1">
          <Title>Festivals</Title>
          {results.festivals.map((festival) => (
            <div
              key={festival.id}
              className=" px-3 py-2 bg-green/10 cursor-pointer hover:bg-green/20 duration-300 "
              onClick={closeResult}
            >
              <Link className="flex items-center" href="/festivals">
                <Image
                  width={100}
                  height={100}
                  quality={80}
                  src={festival.image}
                  alt={festival.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h1 className="uppercase font-bold leading-none">
                    {festival.name}
                  </h1>
                  <span className="font-secondary italic text-lightgray text-[10px] capitalize ">
                    {festival.country}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FestivalResult;
