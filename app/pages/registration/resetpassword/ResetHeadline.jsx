import Headline from "@/app/components/uicomponents/Headline";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const ResetHeadline = ({ title, desc, children }) => {
  return (
    <div className="flex-center flex-col *:text-center">
      {children}
      <Headline className="font-bold text-green">{title}</Headline>
      <Paragraph>
        {desc} {children}
      </Paragraph>
    </div>
  );
};

export default ResetHeadline;
