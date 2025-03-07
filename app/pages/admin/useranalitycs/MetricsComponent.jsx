import { staggerOpacity } from "@/app/animations/motionValues";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import { motion } from "framer-motion";

const MetricsComponent = ({ title, text }) => {
  return (
    <motion.div variants={staggerOpacity} className="metric-box p-4 relative">
      <div>
        <Title className="text-green">{title}</Title>
        <Paragraph>{text}</Paragraph>
      </div>
    </motion.div>
  );
};

export default MetricsComponent;
