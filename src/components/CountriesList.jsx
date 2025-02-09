import { useSelector } from "react-redux";
import CountryInfo from "./CountryInfo";

function CountriesList() {
  const { countries, filteredCountries, searchInput, area } = useSelector(
    (state) => state.filter
  );
  const isFilter = searchInput !== "" || area !== "all";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {isFilter
        ? filteredCountries.map((country, i) => (
            <CountryInfo index={i} info={country} key={country.name} />
          ))
        : countries.map((country, i) => (
            <CountryInfo index={i} info={country} key={country.name} />
          ))}
    </div>
  );
}

export default CountriesList;
