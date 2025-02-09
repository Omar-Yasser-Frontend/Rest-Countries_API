import formatNumber from "../helper/formatting";
import CountryBorderParent from "./CountryBorderParent";

function CountryShowInfo({ country = {} }) {
  const population = formatNumber(country?.population);
  const {
    flags,
    name,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country;

  return (
    <div className="pt-12 flex items-start gap-12 md:gap-24 flex-col lg:items-center lg:flex-row">
      <div className="w-[32rem] max-w-full self-center lg:self-start">
        <img
          className="w-full"
          src={flags.png || flags.svg}
          alt={`${name} flag`}
        />
      </div>
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="flex lg:justify-between justify-start lg:flex-row flex-col lg:self-start">
          <div>
            <p>Native Name: {nativeName}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Capital: {capital}</p>
          </div>
          <div>
            <p>Top Level Domain: {topLevelDomain}</p>
            <p>
              Currencies:{" "}
              {currencies.map((curr, i) =>
                i !== 0 ? `, ${curr.name}` : curr.name
              )}
            </p>
            <p>
              languages:{" "}
              {languages.map((lang, i) =>
                i !== 0 ? `, ${lang.name}` : lang.name
              )}
            </p>
          </div>
        </div>

        <CountryBorderParent country={country} />
      </div>
    </div>
  );
}

export default CountryShowInfo;
