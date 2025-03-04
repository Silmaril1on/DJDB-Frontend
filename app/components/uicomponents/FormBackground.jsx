import Image from "next/image";

const FormBackground = () => {
  return (
    <div className="absolute inset-0 z-0 blur-sm">
      <Image
        className="w-full h-full"
        src="/assets/testbg1.webp"
        width={600}
        height={600}
        alt="bg"
      />
    </div>
  );
};

export default FormBackground;
