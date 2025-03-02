import Link from "next/link";

const ActivityTitles = ({ activities }) => {
  return (
    <div className="flex space-x-4 mt-4 font-secondary">
      {activities.map((activity, index) => (
        <Link href={activity.link} key={index}>
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 block rounded-full"
              style={{ backgroundColor: activity.color }}
            ></span>
            <p className="text-sm hover-white font-medium">
              {activity.name}: {activity.value}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ActivityTitles;
