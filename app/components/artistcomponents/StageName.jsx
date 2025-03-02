import Title from "../uicomponents/Title";

const StageName = ({ item, className }) => {
  const { stageName, name } = item;

  const displayName = stageName || name;

  return <Title className={className}>{displayName}</Title>;
};

export default StageName;
