const BackgroundContainer = ({ data }) => {
  return (
    <div
      className="absolute border inset-0 -z-[1] blur-lg"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0)), url(${data.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default BackgroundContainer;
