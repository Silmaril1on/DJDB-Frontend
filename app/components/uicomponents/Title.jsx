const Title = ({ className, children }) => {
  return (
    <h1
      className={`text-md md:text-xl lg:text-2xl font-primary pointer-events-none capitalize font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
