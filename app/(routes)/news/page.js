import News from "@/app/pages/news/News";
import { fetchNews } from "@/app/utils/api";

export const metadata = () => {
  return {
    title: "DJDB - News",
  };
};

const NewsPage = async () => {
  try {
    const news = await fetchNews();
    return <News data={news} />;
  } catch (error) {
    console.error("Error fetching news:", error);
    return <News data={[]} />;
  }
};

export default NewsPage;
