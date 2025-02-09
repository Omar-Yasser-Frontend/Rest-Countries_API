import Container from "../ui/Container";
import Filter from "../components/Filter";
import CountriesList from "../components/CountriesList";

function CountryList() {
  return (
    <Container>
      <Filter />
      <CountriesList />
    </Container>
  );
}

export default CountryList;
