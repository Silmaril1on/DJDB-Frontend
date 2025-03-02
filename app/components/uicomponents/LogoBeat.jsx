import Beats from "./Beats";
import Logo from "../Logo";

const LogoBeat = () => {
  return (
    <div className="flex-center space-x-2">
      <Logo className="w-24 h-24 text-4xl" />
      <Beats />
    </div>
  );
};

export default LogoBeat;
