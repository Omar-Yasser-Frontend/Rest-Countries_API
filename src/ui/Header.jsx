import Container from "./Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isDarkTheme } from "../slice/themSlice";

function Header() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.global.isDark);

  useEffect(function () {
    if (!localStorage.getItem("isDark")) {
      localStorage.setItem("isDark", JSON.stringify(false));
    }
  }, []);

  useEffect(
    function () {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    },
    [isDark]
  );
  return (
    <header
      className={`shadow-md  ${isDark ? "bg-dark-mod-el" : "bg-light-mod-bg"}`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg md:text-2xl font-bold select-none">
            Where in the world?
          </h1>
          <button
            onClick={() => dispatch(isDarkTheme(!isDark))}
            className="capitalize p-2 rounded-md transition-all duration-300 flex items-center"
          >
            {isDark ? (
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ) : (
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
                </svg>
              </span>
            )}

            {isDark ? "dark mode" : "light mode"}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
