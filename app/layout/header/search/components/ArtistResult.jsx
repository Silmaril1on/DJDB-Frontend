import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import Link from "next/link";

const ArtistResult = ({ results, closeResult }) => {
  return (
    <>
      {results.artists.length > 0 && (
        <div className="p-2 space-y-1">
          <Title>Artists</Title>
          {results.artists.map((artist) => (
            <div
              key={artist.id}
              onClick={closeResult}
              className=" px-3 py-2 bg-green/10 cursor-pointer hover:bg-green/20 duration-300 "
            >
              <Link
                className="flex items-center"
                href={`/artists/${artist.id}`}
              >
                <Image
                  width={100}
                  height={200}
                  quality={80}
                  src={artist.image}
                  alt={artist.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3 leading-none">
                  <h1 className="uppercase font-bold leading-none">
                    {artist.name}
                  </h1>
                  <span className="font-secondary italic text-lightgray text-[10px] capitalize ">
                    {artist.genre?.slice(0, 2).join(", ")}
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

export default ArtistResult;
