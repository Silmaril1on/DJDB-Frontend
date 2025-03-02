"use client";

import { modalAnimation } from "@/app/animations/motionValues";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";
import Button from "@/app/components/uicomponents/Button";
import Close from "@/app/components/uicomponents/Close";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import { setAddItemModal } from "@/app/features/modalSlice";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const AddModal = () => {
  const dispatch = useDispatch();
  const { addItemModal } = useSelector((store) => store.modal);

  const onCloseModal = () => {
    dispatch(setAddItemModal(null));
  };

  return (
    <AnimatePresence>
      {addItemModal && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex-center z-50 px-5"
        >
          <div className="relative w-[500px] h-[500px] bg-blue/60 backdrop-blur-3xl">
            <GreenSvg />
            <div className="absolute top-4 right-4">
              <Close className="text-green" onClick={onCloseModal} />
            </div>
            <article className="px-3 lg:px-5 flex-center h-full">
              {addItemModal.type === "dj" ? (
                <DjType close={onCloseModal} />
              ) : (
                <FestType close={onCloseModal} />
              )}
            </article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DjType = ({ close }) => {
  return (
    <div className="font-secondary">
      <Title>Create your profile</Title>
      <Paragraph className="mt-3 text-gray-700">
        Are you a DJ or electronic music artist looking to gain more exposure?
        Create your own profile on our platform and showcase your talent to a
        global audience. By signing up, you'll be able to:
      </Paragraph>
      <ul className="mt-3 list-disc list-inside text-gray-700 text-[9px] md:text-[12px] font-light marker:text-green">
        <li>Display your biography, music style, and affiliations.</li>
        <li>Upload images and share links to your performances.</li>
        <li>Get rated and reviewed by fans and industry professionals.</li>
        <li>Be discoverable in our growing electronic music database.</li>
      </ul>
      <Paragraph className="mt-3 text-gray-700">
        Whether you're an underground talent or an established name, this is
        your chance to connect with fans, promoters, and fellow artists.
        <span className="font-medium text-green">
          {" "}
          Take the next step in your career today!
        </span>
      </Paragraph>
      <Button onClick={close} className="mt-5">
        <Link href="/createdj">Create your profile</Link>
      </Button>
    </div>
  );
};

const FestType = ({ close }) => {
  return (
    <div className="font-secondary">
      <Title>List Your Festival</Title>
      <Paragraph className="mt-3 text-gray-700">
        Do you organize or manage an electronic music festival? Get your event
        featured on our platform and reach a wider audience of passionate music
        lovers. By listing your festival, you can:
      </Paragraph>
      <ul className="mt-3 list-disc list-inside text-gray-700 text-[9px] md:text-[12px] font-light marker:text-green">
        <li>Showcase your festival’s lineup, location, and unique vibe.</li>
        <li>Connect with DJs and artists who want to perform at your event.</li>
        <li>Let attendees discover, rate, and review your festival.</li>
        <li>Increase ticket sales and brand visibility.</li>
      </ul>
      <Paragraph className="mt-3 text-gray-700">
        Whether you're hosting an intimate underground gathering or a massive
        international festival,
        <span className="font-medium text-green">
          {" "}
          make sure your event gets the recognition it deserves!
        </span>
      </Paragraph>
      <Button onClick={close} className="mt-5">
        <Link href="/createfestival">Create your Festival</Link>
      </Button>
    </div>
  );
};

export default AddModal;
