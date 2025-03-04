import MyProfile from "@/app/pages/userprofile/MyProfile";
import { BACKEND_URL } from "@/app/utils/urls";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  let username = "My Profile";
  if (userCookie) {
    try {
      const user = JSON.parse(userCookie);
      username = `${user.username}'s Profile`;
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  return {
    title: `DJDB - ${username}`,
  };
}

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  if (!userCookie) {
    return <p>Unauthorized. Please log in.</p>;
  }
  const user = JSON.parse(userCookie);
  const token = user.token;
  let userData = null;
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/details`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    userData = await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
  }

  return <MyProfile data={userData} />;
};

export default ProfilePage;
