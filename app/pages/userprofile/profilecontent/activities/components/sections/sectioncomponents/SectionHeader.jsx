import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import { FaCaretRight } from "react-icons/fa";

const SectionHeader = ({ url, title, count }) => {
  return (
    <div>
      <LinkComponent href={url}>
        <span>{title}</span>
        <FaCaretRight />
      </LinkComponent>
      <span className="text-sm text-lightgray font-secondary">{count}</span>
    </div>
  );
};

export default SectionHeader;
