import NewsList from "./NewsList";

const ListSection = ({ data }) => {
  return (
    <div className="bg-neutral-900">
      <NewsList data={data} />
    </div>
  );
};

export default ListSection;
