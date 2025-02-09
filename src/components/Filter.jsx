import { useDispatch, useSelector } from "react-redux";
import {
  filterArea,
  filterInput as filteringInput,
} from "../slice/filterSlice";

function Filter() {
  const isDark = useSelector((state) => state.global.isDark);
  const { area, searchInput } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative py-8 flex md:items-center flex-col md:flex-row items-start md:space-y-0 space-y-8 justify-between`}
    >
      <div className="w-full md:w-auto relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 absolute top-1/2 translate-y-[-50%] left-[1.5rem] translate-x-[-50%]"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          value={searchInput}
          onChange={(e) => dispatch(filteringInput(e.target.value))}
          className={`rounded-md shadow-lg pt-3 pl-12 pr-3 pb-3 w-full md:w-[400px] ${
            isDark ? "bg-dark-mod-el" : "bg-white"
          }`}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <select
        value={area}
        onChange={(e) => dispatch(filterArea(e.target.value))}
        className={`shadow-lg py-3 px-8 w-52 ${
          isDark ? "bg-dark-mod-el" : "bg-white"
        } rounded-md cursor-pointer`}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
