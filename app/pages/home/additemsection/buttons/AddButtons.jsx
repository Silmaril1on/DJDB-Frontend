"use client";
import { setAddItemModal, setWarning } from "@/app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbVinyl } from "react-icons/tb";
import { MdFestival } from "react-icons/md";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";
import Title from "@/app/components/uicomponents/Title";
import { motion } from "framer-motion";
import { forChildren, forParent } from "@/app/animations/motionValues";

const list = [
  {
    id: 0,
    name: "Become a member",
    icon: <TbVinyl />,
    type: "dj",
  },
  {
    id: 1,
    name: "Festival Owner ? ",
    icon: <MdFestival />,
    type: "festival",
  },
];

const AddButtons = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const onOpenModal = (type) => {
    if (!user) {
      dispatch(setWarning(true));
      return;
    }
    dispatch(setAddItemModal(type));
  };

  return (
    <motion.div
      variants={forParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-center space-x-5 md:space-x-10 overflow-hidden"
    >
      {list.map((item) => {
        return (
          <motion.div
            variants={forChildren}
            key={item.id}
            onClick={() => onOpenModal({ type: item.type })}
            className="relative green-hover h-24 md:h-44 flex-center font-bold w-64 cursor-pointer flex-col"
          >
            <GreenSvg />
            <span className="text-4xl md:text-6xl">{item.icon}</span>
            <Title>{item.name}</Title>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AddButtons;
