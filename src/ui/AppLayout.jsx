import { Outlet } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
import useCountries from "../hooks/useCountries";
import { useSelector } from "react-redux";

function AppLayout() {
  const isDark = useSelector((state) => state.global.isDark);
  const { isLoading } = useCountries();

  return (
    <div
      className={`${
        isDark
          ? "bg-dark-mod-bg text-dark-txt-light-el"
          : "bg-light-mod-bg text-light-mod-txt"
      } min-h-screen`}
    >
      {isLoading === "loading" && <Loading />}
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
