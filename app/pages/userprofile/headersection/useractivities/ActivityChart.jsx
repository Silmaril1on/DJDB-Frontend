import { motion } from "framer-motion";

const ActivityChart = ({ activities, data }) => {
  let accumulatedOffset = 0;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const total =
    data.favorites.length + data.reviews.length + data.ratedArtists.length;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {activities.map((activity, index) => {
          const strokeLength = (activity.value / total) * circumference;
          const strokeDasharray = `${strokeLength} ${circumference}`;
          const strokeDashoffset = -accumulatedOffset;
          accumulatedOffset += strokeLength;
          return (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r={radius}
              stroke={activity.color}
              strokeWidth="10"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset.toString()}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{ strokeDasharray }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default ActivityChart;
