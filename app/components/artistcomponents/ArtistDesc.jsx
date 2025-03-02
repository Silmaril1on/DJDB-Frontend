import Paragraph from "../uicomponents/Paragraph";

const ArtistDesc = ({ item, className }) => {
  return (
    <div className="h-full mt-1">
      <Paragraph className={className}>
        {item.desc.length > 300
          ? `${item.desc.substring(0, 300)}...`
          : item.desc}
      </Paragraph>
    </div>
  );
};

export default ArtistDesc;
