import { useAuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./Registration.module.scss";
import registerSvg from "../../assets/register_illyustration.svg";
import SolidButton from "../SolidButton/SolidButton";
import { GoChevronDown } from "react-icons/go";
import CountriesDropDown from "../CountriesDropDown/CountriesDropDown";
import { useState } from "react";

const Registration = () => {
  const { userType } = useAuthContext();
  const [country, setCountry] = useState("Select your country");
  const [showCountries, setShowCountries] = useState(false);

  const headers = {
    vendor: "Sign up to sell your amazing products",
    customer: "Sign up to find products you love",
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration__form_holder}>
        <img src={registerSvg} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>{headers[userType!]}</h2>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <div className={styles.registration__country_dropdown_parent}>
            <div onClick={() => setShowCountries(!showCountries)}>
              <p>{country}</p>
              <GoChevronDown />
            </div>
            {showCountries && (
              <CountriesDropDown
                selectedCountry={country}
                setSelectedCountry={setCountry}
                setShowCountries={setShowCountries}
              />
            )}
          </div>
          {userType == "vendor" && (
            <input type="text" placeholder="Business name" />
          )}
          <input type="password" placeholder="Password" />
          <SolidButton text="Register" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
