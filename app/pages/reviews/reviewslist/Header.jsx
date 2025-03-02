import Headline from "@/app/components/uicomponents/Headline";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const Header = ({ data }) => {
  return (
    <div className="my-5 inline-flex flex-col">
      <Headline>Artist Reviews</Headline>
      <Paragraph>{data.length} Reviews</Paragraph>
    </div>
  );
};

export default Header;
