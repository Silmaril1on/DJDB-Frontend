import { BACKEND_URL } from "./urls";

//fetch news
export const fetchNews = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/news`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

// Fetch User's Favorite Artists
export const fetchUserFavorites = async (token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

// Fetch recent favorite artists
export const fetchRecentFavorites = async (token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/recentfavorites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recent favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recent favorites:", error.message);
    return null;
  }
};

// Fetch recent rated artists
export const fetchRecentRates = async (token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/recentlyrated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recent favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recent favorites:", error.message);
    return null;
  }
};

export const fetchRecentReviews = async (token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/recentreviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recent favorites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recent favorites:", error.message);
    return null;
  }
};

export const toggleFavorite = async (artistId, token) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/user/${artistId}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to toggle favorite");
    }
    return await response.json();
  } catch (error) {
    console.error("Error toggling favorite:", error);
    throw error;
  }
};

// Fetch User Profile Details
export const fetchUserDetails = async (token) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/details`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch User Details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching details", error);
    throw error;
  }
};

// fetch born today artists
export const fetchBornTodayArtists = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/artists/borntoday`, {
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching details", error);
    return [];
  }
};

export const fetchRandomFests = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/festivals/randomfestival`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching details", error);
    return [];
  }
};

export const fetchFestivals = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/festivals/`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching details", error);
    return [];
  }
};
