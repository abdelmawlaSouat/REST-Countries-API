import { CountryOverview } from "types/CountryOverview";

const BASE_URL = "https://restcountries.com/v3.1/all";

interface Props {
  fields?: string[];
  length?: number;
}

const defaultFields = ["name", "capital", "region", "population", "flags"];

export const getAllCountries = async ({
  fields = defaultFields,
  length = 21,
}: Props): Promise<CountryOverview[]> => {
  try {
    const response = await fetch(`${BASE_URL}?fields=${fields.join(",")}`);
    const data = await response.json();

    return data.slice(0, length);
  } catch (error) {
    console.log("Error :", error);

    return [];
  }
};
