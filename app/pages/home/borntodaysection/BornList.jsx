import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";

const BornList = () => {
  return (
    <div>
      <div className="w-52 text-white flex-center flex-col">
        <div className=" w-full h-52 rounded-full overflow-hidden">
          <Image
            className="w-full h-full hover-image object-cover"
            src="/assets/test.webp"
            alt="text"
            width={500}
            height={500}
            quality={100}
            priority
          />
        </div>
        <article className="flex-center flex-col">
          <Title>Jan Blomqvist</Title>
          <span className=" font-bold">52</span>
        </article>
      </div>
    </div>
  );
};

export default BornList;
