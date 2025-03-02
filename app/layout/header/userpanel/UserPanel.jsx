"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "@/app/features/modalSlice";
import { getUser } from "@/app/features/userSlice";
import Spinner from "@/app/components/Spinner";
import UsernamePanel from "./panels/UsernamePanel";
import RegPanel from "./panels/RegPanel";
import UserFavoritesPanel from "./useractives/UserFavoritesPanel";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { loading } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(setLoading(true));
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(getUser(user));
    }
    dispatch(setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <div className="flex-center">
          {/* <UserFavoritesPanel /> */}
          <UsernamePanel />
        </div>
      ) : (
        <RegPanel />
      )}
    </>
  );
};

export default UserPanel;
