import CountryInterface from "./Country";

interface Countries {
  countriesList: CountryInterface[];
  handleCountriesList(newList: CountryInterface[]): void;
}

export default Countries;
