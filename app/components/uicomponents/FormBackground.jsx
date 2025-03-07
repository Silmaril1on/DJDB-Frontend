import Image from "next/image";

const FormBackground = () => {
  return (
    <div className="absolute inset-0 z-0 blur-sm">
      <img className="w-full h-full" src="/assets/testbg1.webp" alt="bg" />
    </div>
  );
};

export default FormBackground;
