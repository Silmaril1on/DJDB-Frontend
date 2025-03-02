import Link from "next/link";

const LinkComponent = ({ children, href, className, onClick, target }) => {
  return (
    <Link
      target={target}
      href={href}
      onClick={onClick}
      className={`inline-flex flex-row items-center hover-white text-sm lg:text-lg space-x-1 font-bold w-fit ${className}`}
    >
      {children[0]}
      <span>{children[1]}</span>
    </Link>
  );
};

export default LinkComponent;
