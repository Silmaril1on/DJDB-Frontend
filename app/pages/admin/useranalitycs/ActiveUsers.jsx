import { staggerOpacity } from "@/app/animations/motionValues";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import SpanText from "@/app/components/uicomponents/SpanText";
import Title from "@/app/components/uicomponents/Title";
import { motion } from "framer-motion";

const ActiveUsers = ({ analytics }) => {
  return (
    <motion.div
      variants={staggerOpacity}
      className="col-span-2 relative p-4 metric-box"
    >
      <div>
        <Title>Most Active Users</Title>
        <div className="space-y-2">
          {analytics?.mostActiveUsers.map((user, index) => (
            <div key={user._id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green">{index + 1}.</span>
                <div className="flex flex-col">
                  <span className="text-white">{user.username}</span>
                  <SpanText className="text-white">{user.email}</SpanText>
                </div>
              </div>
              <Paragraph>{user.submissionCount} submissions</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ActiveUsers;
