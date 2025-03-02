import Image from "next/image";

const NationalityDetails = ({ item, className }) => {
  const { flag, country, city } = item;
  return (
    <div
      className={`w-fit flex-center space-x-1 font-light capitalize ${className}`}
    >
      <div className="w-4 xl:w-6">
        <Image
          src={flag}
          alt="country-flag"
          width={100}
          height={100}
          className="w-full h-full mr-2"
        />
      </div>
      <div className="flex-center text-lightgray space-x-1 capitalize group-hover:text-white duration-300 font-secondary font-medium text-[8px] lg:text-[12px]">
        <span>{country}</span> <span>{city}</span>
      </div>
    </div>
  );
};

export default NationalityDetails;
