import { setEditReviewModal } from "@/app/features/modalSlice";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

const EditIcon = ({ item }) => {
  const dispatch = useDispatch();

  const openEditReviewModal = async () => {
    dispatch(setEditReviewModal(item));
  };

  return <MdEdit onClick={openEditReviewModal} />;
};

export default EditIcon;
