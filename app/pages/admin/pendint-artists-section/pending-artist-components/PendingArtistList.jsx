import SubmissionButtons from "./SubmissionButtons";
import SubmittedBy from "./SubmittedBy";
import SubmittedWho from "./SubmittedWho";
import Spinner from "@/app/components/Spinner";
import EmptyField from "@/app/components/EmptyField";

const PendingArtistList = ({ pendingData, setPendingData, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {pendingData.length === 0 ? (
        <EmptyField className="p-10">No pending submissions</EmptyField>
      ) : (
        <div className="grid space-y-2 mt-2">
          {pendingData.map((item) => (
            <div
              key={item._id}
              className="border border-lightgray/30 p-2 relative grid grid-cols-3"
            >
              <SubmittedBy item={item} />
              <SubmittedWho item={item} />
              <SubmissionButtons item={item} setPendingData={setPendingData} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PendingArtistList;
