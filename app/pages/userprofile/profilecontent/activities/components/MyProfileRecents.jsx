import Spinner from "@/app/components/Spinner";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MobileSwiper from "./sections/MobileSwiper";
import DesktopSlider from "./sections/DesktopSlider";
import SectionHeader from "./sections/sectioncomponents/SectionHeader";

const MyProfileRecents = ({ title, fetchData, url, count }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchItems = async () => {
      if (!user?.token) return;
      setLoading(true);
      try {
        const data = await fetchData(user.token);
        setItems(data);
      } catch (error) {
        console.error(`Error fetching ${title.toLowerCase()}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [user?.token, fetchData, title]);

  return (
    <div className="px-3 my-5 py-5 space-y-2 bg-neutral-900">
      <SectionHeader title={title} url={url} count={count} />
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {items && items.length > 0 ? (
              <>
                <MobileSwiper items={items} />
                <DesktopSlider items={items} />
              </>
            ) : (
              <h1>No {title}</h1>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default MyProfileRecents;
