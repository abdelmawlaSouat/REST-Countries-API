export interface CountryOverview {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}
