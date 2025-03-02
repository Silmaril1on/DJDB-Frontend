import Link from "next/link";
import Close from "./uicomponents/Close";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setWarning } from "../features/modalSlice";
import { modalAnimation } from "../animations/motionValues";
import WhiteSvg from "./materialcomponents/WhiteSvg";

const LoginWarning = () => {
  const dispatch = useDispatch();

  const handleclose = () => {
    dispatch(setWarning(null));
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed flex-center bg-black right-10 bottom-10 text-white px-14 py-5 z-10"
    >
      <WhiteSvg />
      <section className="flex-center flex-col mr-3 relative z-[3]">
        <div>
          <Link onClick={handleclose} className="link-green" href="/login">
            LOGIN
          </Link>{" "}
        </div>
        <div className="flex-center flex-col">
          <span>Dont have an account ?</span>
          <div className="space-x-2">
            <Link onClick={handleclose} href="/signup" className="link-green">
              SIGN UP
            </Link>
          </div>
        </div>
      </section>
      <Close className="absolute top-2 right-2" onClick={handleclose} />
    </motion.div>
  );
};

export default LoginWarning;
