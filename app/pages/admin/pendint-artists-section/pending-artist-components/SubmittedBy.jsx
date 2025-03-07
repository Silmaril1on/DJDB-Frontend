import SpanText from "@/app/components/uicomponents/SpanText";
import Title from "@/app/components/uicomponents/Title";

const SubmittedBy = ({ item }) => {
  return (
    <div>
      <SpanText>Submitted by</SpanText>
      <div className="flex flex-col">
        <Title>{item.submittedBy.username}</Title>
        <SpanText>{item.submittedBy.email}</SpanText>
      </div>
      <SpanText>{new Date(item.createdAt).toLocaleDateString()}</SpanText>
    </div>
  );
};

export default SubmittedBy;
