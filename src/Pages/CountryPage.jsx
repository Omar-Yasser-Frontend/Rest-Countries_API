import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Container from "../ui/Container";
import CountryShowInfo from "../components/CountryShowInfo";

function CountryPage() {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const countryIndex = query.get("id");
  const isDark = useSelector((state) => state.global.isDark);
  const { countries } = useSelector((state) => state.filter);

  let country = null;

  if (countries.length) {
    country = countries[countryIndex];
  }
  return (
    <Container>
      <div className="pt-16">
        <button
          onClick={() => navigate(-1)}
          className={`py-2 px-8 shadow-lg ${
            isDark ? "bg-dark-mod-el" : "bg-light-mod-bg"
          }`}
        >
          &#8592; <span className="ml-2">Back</span>
        </button>
        {country !== null && <CountryShowInfo country={country} />}
      </div>
    </Container>
  );
}

export default CountryPage;
