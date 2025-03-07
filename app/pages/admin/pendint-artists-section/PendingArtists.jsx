"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PendingArtistList from "./pending-artist-components/PendingArtistList";
import Title from "@/app/components/uicomponents/Title";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import { BACKEND_URL } from "@/app/utils/urls";
import Spinner from "@/app/components/Spinner";

const PendingArtists = () => {
  const [pendingData, setPendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchPendingSubmissions = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/pending`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch pending submissions");
        }
        const data = await response.json();
        setPendingData(data);
      } catch (error) {
        console.error("Error fetching pending submissions:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchPendingSubmissions();
    }
  }, [user]);

  return (
    <div className="bg-black px-3 lg:px-5 py-5">
      <Title>Pending Submissions</Title>
      <Paragraph>{pendingData.length} Pending Submissions</Paragraph>
      {loading ? (
        <div className="flex-center h-96">
          <Spinner />
        </div>
      ) : (
        <PendingArtistList
          pendingData={pendingData}
          setPendingData={setPendingData}
        />
      )}
    </div>
  );
};

export default PendingArtists;
