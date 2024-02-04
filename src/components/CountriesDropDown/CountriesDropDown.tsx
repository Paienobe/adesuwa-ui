import { getNames } from "country-list";
import styles from "./CountriesDropdown.module.scss";
import { GoCheck } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";
import { CountriesDropDownProps } from "./type";
import { useState } from "react";

const CountriesDropDown = ({
  selectedCountry,
  setSelectedCountry,
  setShowCountries,
}: CountriesDropDownProps) => {
  const allCountries = getNames();
  const [visibleCountries, setVisibleCountries] = useState(allCountries);

  const filterCountries = (query: string) => {
    const filtered = allCountries.filter((country) => {
      return country.toLowerCase().includes(query.toLowerCase());
    });
    setVisibleCountries(filtered);
  };

  return (
    <div className={styles.countries_dropdown}>
      <div className={styles.countries_dropdown__search_bar}>
        <BiSearchAlt2 size={25} />
        <input
          type="text"
          className={styles.countries_dropdown__search_bar__input}
          placeholder="Search country"
          onChange={(e) => filterCountries(e.target.value)}
        />
      </div>
      <div>
        {visibleCountries.map((country) => {
          return (
            <button
              key={country}
              onClick={() => {
                setSelectedCountry(country);
                setShowCountries(false);
              }}
            >
              <p>{country}</p>
              {selectedCountry == country && <GoCheck />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesDropDown;
