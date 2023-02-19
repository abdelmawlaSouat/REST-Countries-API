import { FC } from "react";
import CountryInterface from "../../types/Country";
import scss from "./CountryCard.module.scss";

interface Props {
  country: CountryInterface;
}

const CountryCard: FC<Props> = ({ children, ...props }) => {
  const { country } = props;
  return (
    <div className={scss.card}>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <div className={scss.content}>
        <span className={scss.title}>{country.name}</span>
        <p>
          <span className={scss.bolder}>Population: </span>
          <span className="population">
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(country.population)}
          </span>
        </p>
        <p>
          <span className={scss.bolder}>Region: </span>
          <span className="region">{country.region}</span>
        </p>
        <p>
          <span className={scss.bolder}>Capital: </span>
          <span className="capital">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
