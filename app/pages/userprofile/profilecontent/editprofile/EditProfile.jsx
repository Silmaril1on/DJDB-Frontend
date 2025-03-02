import Title from "@/app/components/uicomponents/Title";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import EditModal from "./EditModal";
import ImageUploadModal from "./ImageUploadModal";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";
import { MdEdit } from "react-icons/md";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import Header from "./Header";

const EditProfile = ({ data }) => {
  const [editModal, setEditModal] = useState(null);
  const [imageModal, setImageModal] = useState(false);

  const fields = [
    { name: "username", label: "Username", value: data?.username },
    { name: "country", label: "Country", value: data?.country },
    { name: "city", label: "City", value: data?.city },
    { name: "address", label: "Address", value: data?.address },
    { name: "phone", label: "Phone", value: data?.phone },
  ];

  return (
    <div className="py-5 px-3 space-y-5 flex-center flex-col">
      <Header />
      <motion.section
        variants={staggerOpacity}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-2/4 space-y-2 flex-center flex-col *:grid *:grid-cols-[1fr_2fr_1fr] *:w-full *:items-center"
      >
        {fields.map((field) => (
          <motion.div variants={staggerOpacity} key={field.name}>
            <span className="text-sm font-secondary text-lightgray">
              {field.label}
            </span>
            <Title>{field.value || "Not set"}</Title>
            <LinkComponent href="" onClick={() => setEditModal(field)}>
              <MdEdit />
              <span>Edit</span>
            </LinkComponent>
          </motion.div>
        ))}
        <motion.div variants={staggerOpacity}>
          <span className="text-sm font-secondary text-lightgray">Avatar</span>
          <Title>{data?.image ? "Uploaded" : "No image"}</Title>
          <LinkComponent href="" onClick={() => setImageModal(true)}>
            <MdCloudUpload />
            <span>Upload</span>
          </LinkComponent>
        </motion.div>
      </motion.section>

      {editModal && (
        <EditModal
          field={editModal}
          onClose={() => setEditModal(null)}
          currentValue={editModal.value}
        />
      )}

      {imageModal && (
        <ImageUploadModal
          onClose={() => setImageModal(false)}
          currentImage={data?.image}
        />
      )}
    </div>
  );
};

export default EditProfile;
