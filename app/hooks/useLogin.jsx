"use client";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { setError, setLoading } from "../features/modalSlice";
import { setCookie } from "../utils/cookies";
import { BACKEND_URL } from "../utils/urls";

export const useLogin = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((store) => store.modal);

  const login = async (email, password) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${BACKEND_URL}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const userData = await response.json();
      if (!response.ok) {
        throw new Error(userData.error || "Login failed");
      }
      localStorage.setItem("user", JSON.stringify(userData));
      setCookie("user", JSON.stringify(userData), {
        path: "/",
        maxAge: 259200,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      dispatch(getUser(userData));
      return true;
    } catch (err) {
      dispatch(setError(err.message));
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { login, loading, error };
};
