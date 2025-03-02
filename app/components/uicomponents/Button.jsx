const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative text-lightgray hover:text-white w-fit font-primary uppercase text-lg green-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
