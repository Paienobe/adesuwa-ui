import { useAuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./Registration.module.scss";
import registerSvg from "../../assets/Placeholder-bro.svg";
import SolidButton from "../SolidButton/SolidButton";
import { useEffect, useState } from "react";
import { defaultRegData } from "../../pages/Auth/contants";
import {
  registerCustomer,
  registerVendor,
} from "../../services/api/registration";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVendorContext } from "../../context/VendorContext/VendorContext";
import { updateBearerToken } from "../../utils/updateBearerToken";
import Dropdown from "../Dropdown/Dropdown";
import { getNames } from "country-list";

const Registration = () => {
  const { userType } = useAuthContext();
  const { setVendor } = useVendorContext();

  const [regData, setRegData] = useState(defaultRegData);
  const [country, setCountry] = useState("");

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
  const allCountries = getNames();

  return (
    <div className={styles.registration}>
      <div className={styles.registration__form_holder}>
        <img src={registerSvg} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userType === "customer"
              ? registerCustomer(regData).then(() => {
                  toast.success("Customer created");
                })
              : registerVendor(regData).then((result) => {
                  const { access_token, vendor } = result;
                  updateBearerToken(access_token);
                  setVendor(vendor);
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
          <Dropdown
            defaultText="Select your country"
            options={allCountries}
            searchBarPlaceholder="Search country"
            selectedOption={country}
            setSelectedOption={setCountry}
          />

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
