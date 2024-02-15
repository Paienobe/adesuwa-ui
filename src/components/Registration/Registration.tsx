import { useAuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./Registration.module.scss";
import registerSvg from "../../assets/Placeholder-bro.svg";
import SolidButton from "../SolidButton/SolidButton";
import { GoChevronDown } from "react-icons/go";
import CountriesDropDown from "../CountriesDropDown/CountriesDropDown";
import { useEffect, useState } from "react";
import { defaultRegData } from "../../pages/Auth/contants";
import {
  registerCustomer,
  registerVendor,
} from "../../services/api/registration";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { backendInstance } from "../../services/axios/backendInstance";
import { useVendorPageContext } from "../../context/VendorPageContext/VendorPageContext";

const Registration = () => {
  const { userType } = useAuthContext();
  const { setVendor } = useVendorPageContext();

  const [regData, setRegData] = useState(defaultRegData);
  const [country, setCountry] = useState("Select your country");
  const [showCountries, setShowCountries] = useState(false);

  const headers = {
    vendor: "Sign up to sell your amazing products",
    customer: "Sign up to find products you love",
  };

  const updateRegData = (field: string, value: string) => {
    const updatedRegData = { ...regData, [field]: value };
    setRegData(updatedRegData);
  };

  useEffect(() => {
    setRegData({ ...regData, country });
  }, [country]);

  const navigate = useNavigate();

  return (
    <div className={styles.registration}>
      <div className={styles.registration__form_holder}>
        <img src={registerSvg} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userType === "customer"
              ? registerCustomer(regData).then((result) => {
                  toast.success("Customer created");
                  backendInstance.defaults.headers.common["Authorization"] = "";
                })
              : registerVendor(regData).then((result) => {
                  const { access_token, vendor } = result;
                  setVendor(vendor);
                  backendInstance.defaults.headers.common[
                    "Authorization"
                  ] = `Bearer ${access_token}`;
                  toast.success("Vendor created");
                  navigate("/vendor-dashboard");
                });
          }}
        >
          <h2>{headers[userType!]}</h2>
          <input
            type="text"
            placeholder="First Name"
            value={regData.first_name}
            onChange={(e) => updateRegData("first_name", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={regData.last_name}
            onChange={(e) => updateRegData("last_name", e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={userType == "customer" ? "Email" : "Work Email"}
            value={regData.email}
            onChange={(e) => updateRegData("email", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={regData.phone_number}
            onChange={(e) => updateRegData("phone_number", e.target.value)}
            required
          />
          <div className={styles.registration__country_dropdown_parent}>
            <div
              className="hook_class"
              onClick={() => setShowCountries(!showCountries)}
            >
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
            <input
              type="text"
              placeholder="Business name"
              value={regData.business_name}
              onChange={(e) => updateRegData("business_name", e.target.value)}
              required
            />
          )}
          <input
            type="password"
            placeholder="Password"
            value={regData.password}
            onChange={(e) => updateRegData("password", e.target.value)}
            required
          />
          <SolidButton text="Register" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
