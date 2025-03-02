const Paragraph = ({ className, children }) => {
  return (
    <p
      className={`text-lightgray pointer-events-none whitespace-pre-wrap font-secondary text-[10px] lg:text-sm md:text-[12px]
       ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
