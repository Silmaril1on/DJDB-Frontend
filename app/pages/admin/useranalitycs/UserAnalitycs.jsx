"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "@/app/utils/urls";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";
import Title from "@/app/components/uicomponents/Title";
import Spinner from "@/app/components/Spinner";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import MetricsComponent from "./MetricsComponent";
import ActiveUsers from "./ActiveUsers";

const UserAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/user/analytics`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch analytics");
        }
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  return (
    <div className="bg-black px-3 lg:px-5 py-5">
      <Title>User Analytics</Title>
      <Paragraph>Track users</Paragraph>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          variants={staggerOpacity}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 mt-2"
        >
          <MetricsComponent title={analytics?.totalUsers} text="Total Users" />

          <MetricsComponent
            title={analytics?.totalSubmissions}
            text="Total Submissions"
          />
          <MetricsComponent
            title={analytics?.lastMonthUsers}
            text="New Users (Last week)"
          />
          <MetricsComponent
            title={analytics?.lastMonthUsers}
            text="New Users (Last month)"
          />
          <ActiveUsers analytics={analytics} />
        </motion.div>
      )}
    </div>
  );
};

export default UserAnalytics;
