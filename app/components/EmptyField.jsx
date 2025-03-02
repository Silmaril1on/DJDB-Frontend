const EmptyField = ({ children, className }) => {
  return (
    <div className={`grow flex-center capitalize ${className}`}>{children}</div>
  );
};

export default EmptyField;
