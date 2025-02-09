import CountryBorder from "./CountryBorder";

function CountryBorderParent({ country }) {
  return (
    <div className="mt-6 md:mt-16 flex sm:flex-row xl:flex-row lg:flex-col flex-col">
      Border Countries:{" "}
      <div className="flex gap-3 xl:mt-0 lg:mt-4 mt-0 flex-1">
        {country.borders &&
          country.borders.map((country) => (
            <CountryBorder key={country}>{country}</CountryBorder>
          ))}
      </div>
    </div>
  );
}

export default CountryBorderParent;
