import styles from "styles/Home.module.scss";
import CountryCard from "../components/countryCard/CountryCard";
import { CountryOverview } from "../types/CountryOverview";
import Link from "next/link";
import { getAllCountries } from "services/getAllCountries";

interface Props {
  countries: CountryOverview[];
}

export default function Page({ countries }: Props) {
  // const [researchValue, setResearchValue] = useState("");
  // const [isFetched, setIsFetched] = useState(false);
  // const [countriesList, setCountriesList] = useState([]);
  // const [filter, setFilter] = useState<string>("all");
  // let allCountries = useRef<any>(null);

  // function handleResearchValue(newValue: string): void {
  //   setResearchValue(newValue);
  // }

  // function handleCountriesList(newList: any): void {
  //   setCountriesList(newList);
  // }

  // function handleFilter(newFilter: string): void {
  //   setFilter(newFilter);
  // }

  // useEffect(() => {
  //   const getAllCountries = async () => {
  //     const result = await fetch("/api/get-all-countries", { method: "GET" });
  //     const { data, error } = await result.json();

  //     if (error) {
  //       throw new Error(error);
  //     }

  //     setCountriesList(data.slice(0, 21));
  //   };

  //   getAllCountries();
  // }, []);

  // useEffect(() => {
  //   setIsFetched(isFetched);
  // }, [countriesList, isFetched]);

  console.log("countries", countries);

  return (
    <div className={styles.home}>
      <div className={styles.searchBarAndFiltersContainer}>
        {/* <SearchBar
          research={{
            placeholder: "Search a country...",
            handleResearchValue,
            researchValue,
          }}
          countries={{
            countriesList: allCountries.current,
            handleCountriesList,
          }}
          activeFilter={filter}
        /> */}

        {/* <FiltersSelects
          title="Filter by Region"
          activeFilter={{
            filter,
            handleFilter,
          }}
          filters={[
            { id: 0, value: "Africa" },
            { id: 1, value: "Americas" },
            { id: 2, value: "Asia" },
            { id: 3, value: "Europe" },
            { id: 4, value: "Oceania" },
          ]}
          countries={{
            countriesList: allCountries.current,
            handleCountriesList,
          }}
        /> */}
      </div>

      <div className={styles.countriesList}>
        {countries.map((country) => (
          <Link
            key={country.name.common}
            href={`/country/${country.name.common.toLowerCase()}`}
          >
            <CountryCard country={country} />
          </Link>
        ))}

        {/* {isFetched && !!countriesList.length && (
          <span
            className={styles.errorMsg}
          >{`Sorry, no results were found for "${researchValue}".`}</span>
        )} */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const countries = await getAllCountries({});

  return {
    props: {
      countries,
    },
  };
}
