import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CountryBorder({ children }) {
  const [helloWorld, setHelloWorld] = useState("next time i will in");
  const isDark = useSelector((state) => state.global.isDark);
  const countries = useSelector((state) => state.filter.countries);
  // console.log(countries);
  // const countryValidName = countries.find((e => e.alpha3Code == children);
  useEffect(function () {
    console.log(helloWorld);
  }, []);
  const countryName = countries.find((e) => e.alpha3Code === children);
  return (
    <Link
      to={`/country/?id=${countries.findIndex(
        (e) => e.alpha3Code == children
      )}`}
      className={`flex justify-center py-1 shadow-md text-sm flex-1 ${
        isDark ? "bg-dark-mod-el" : "bg-light-mod-bg"
      }`}
    >
      {countryName?.name || "not found"}
    </Link>
  );
}

export default CountryBorder;
