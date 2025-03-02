import Paragraph from "@/app/components/uicomponents/Paragraph";

const FestInfo = ({ item }) => {
  const paragraphs = item.info.replace(/\\n/g, "\n").split("\n\n");
  const fullBio = paragraphs.join("\n\n");
  return (
    <div>
      <Paragraph className="first-letter:text-4xl first-letter:text-green">
        {fullBio}
      </Paragraph>
    </div>
  );
};

export default FestInfo;
