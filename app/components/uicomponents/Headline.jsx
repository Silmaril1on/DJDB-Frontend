const Headline = ({ children, className }) => {
  return (
    <h1 className={`text-2xl md:text-3xl lg:text-5xl  ${className}`}>
      {children}
    </h1>
  );
};

export default Headline;
