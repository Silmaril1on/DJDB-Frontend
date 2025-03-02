"use client";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/userSlice";
import { deleteCookie } from "../utils/cookies";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    deleteCookie("user");
    dispatch(clearUser());
  };

  return { logout };
};
