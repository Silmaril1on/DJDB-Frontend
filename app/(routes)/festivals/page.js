import Festivals from "@/app/pages/festival/Festivals";
import { fetchFestivals } from "@/app/utils/api";

export const metadata = {
  title: "DJDB - Festivals",
};

const FestivalsPage = async () => {
  try {
    const festData = await fetchFestivals();
    return <Festivals data={festData} />;
  } catch (error) {
    console.error("Error fetching festivals:", error);
    return <Festivals data={[]} />;
  }
};

export default FestivalsPage;
