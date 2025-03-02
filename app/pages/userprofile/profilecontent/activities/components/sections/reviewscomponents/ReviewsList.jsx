import Spinner from "@/app/components/Spinner";
import { fetchRecentReviews } from "@/app/utils/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SectionHeader from "../sectioncomponents/SectionHeader";
import MobileReviews from "./MobileReviews";
import DesktopReviews from "./DesktopReviews";

const ReviewsList = ({ count, title, url }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.user);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      if (!user?.token) return;
      setLoading(true);
      try {
        const data = await fetchRecentReviews(user.token);
        setItems(data);
      } catch (error) {
        console.error(`Error fetching ${title.toLowerCase()}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [user?.token]);

  return (
    <div className="px-3 my-5 py-5 space-y-2 bg-neutral-900">
      <SectionHeader count={count} url={url} title={title} />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {items && items.length > 0 ? (
              <>
                <MobileReviews items={items} />
                <DesktopReviews items={items} />
              </>
            ) : (
              <h1>No reviews yet</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsList;
