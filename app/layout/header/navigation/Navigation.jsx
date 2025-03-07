"use client";
import Logo from "@/app/components/Logo";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import { TbVinyl } from "react-icons/tb";
import { MdAdminPanelSettings, MdFestival } from "react-icons/md";
import { useSelector } from "react-redux";
import SearchBar from "../search/SearchBar";

const Navigation = () => {
  const { userDetails, user } = useSelector((store) => store.user);

  return (
    <div className="hidden md:flex-center flex-row space-x-4">
      <Logo className="w-16 h-16 text-2xl" />
      <LinkComponent href={`/artists`}>
        <TbVinyl />
        <span>Artists</span>
      </LinkComponent>
      <LinkComponent href={`/festivals`}>
        <MdFestival />
        <span>Festivals</span>
      </LinkComponent>
      {userDetails?.admin && (
        <LinkComponent href={`/adminpanel`}>
          <MdAdminPanelSettings />
          <span>Dashboard</span>
        </LinkComponent>
      )}
      <SearchBar />
    </div>
  );
};

export default Navigation;
