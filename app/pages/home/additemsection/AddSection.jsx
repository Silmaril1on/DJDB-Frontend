import Headline from "@/app/components/uicomponents/Headline";
import AddButtons from "./buttons/AddButtons";

const AddSection = () => {
  return (
    <section className="relative px-3 lg:px-5 py-10 bg-black ">
      <Headline className="mb-3 text-green capitalize">ADD section</Headline>
      <AddButtons />
    </section>
  );
};

export default AddSection;
