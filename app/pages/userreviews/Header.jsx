import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";

const Header = ({ data }) => {
  return (
    <SectionHeadline
      title="My Reviews"
      description="View and manage all your written reviews in one place. Reflect on past ratings, edit your thoughts, and keep track of your impact on the community."
    >
      <span>You have {data?.length} reviews </span>
    </SectionHeadline>
  );
};

export default Header;
