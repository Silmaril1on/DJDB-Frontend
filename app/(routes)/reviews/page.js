import MyReviews from "@/app/pages/userreviews/MyReviews";
import { cookies } from "next/headers";

export const metadata = () => {
  return {
    title: "DJDB - My Reviews",
  };
};

const MyReviewsPage = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  if (!userCookie) {
    return <p>Unauthorized. Please log in.</p>;
  }
  const user = JSON.parse(userCookie);
  const token = user.token;
  let userReviews = null;
  try {
    const res = await fetch(`${BACKEND_URL}/api/user/myreviews`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch user details");
    }
    userReviews = await res.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
  }

  return <MyReviews data={userReviews} />;
};

export default MyReviewsPage;
