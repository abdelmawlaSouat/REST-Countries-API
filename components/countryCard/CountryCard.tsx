import Image from "next/image";
import { FC } from "react";
import { CountryOverview } from "types/CountryOverview";
import styles from "./CountryCard.module.scss";

interface Props {
  country: CountryOverview;
}

const CountryCard: FC<Props> = ({ country }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image src={country.flags.png} alt={country.flags.alt} fill />
      </div>

      <div className={styles.content}>
        <span className={styles.title}>{country.name.common}</span>

        <p>
          <span className={styles.bolder}>Population: </span>
          <span className="population">
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(country.population)}
          </span>
        </p>

        <p>
          <span className={styles.bolder}>Region: </span>
          <span className="region">{country.region}</span>
        </p>

        <p>
          <span className={styles.bolder}>Capital: </span>
          <span className="capital">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
