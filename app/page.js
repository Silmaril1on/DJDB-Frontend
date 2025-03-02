import HomePage from "./pages/home/HomePage";
import {
  fetchBornTodayArtists,
  fetchNews,
  fetchRandomFests,
} from "./utils/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  let news = [];
  let born = [];
  let festival = [];

  try {
    news = await fetchNews();
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  try {
    born = await fetchBornTodayArtists();
  } catch (error) {
    console.error("Error fetching born today artists:", error);
  }

  try {
    festival = await fetchRandomFests();
  } catch (error) {
    console.error("Error fetching festivals:", error);
  }

  return <HomePage newsData={news} bornData={born} festData={festival} />;
}
