import styles from "./Login.module.scss";
import loginSvg from "../../assets/My password-pana.svg";
import SolidButton from "../SolidButton/SolidButton";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useState } from "react";
import { loginUser } from "../../services/api/login";
import { useNavigate } from "react-router-dom";
import { updateBearerToken } from "../../utils/updateBearerToken";
import { useVendorContext } from "../../context/VendorContext/VendorContext";
import { useCustomerContext } from "../../context/CustomerContext/CustomerContext";

const Login = () => {
  const { userType, setUserType } = useAuthContext();
  const { setVendor } = useVendorContext();
  const { setCustomer } = useCustomerContext();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const updateLoginData = (field: string, value: string) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={styles.login__form_holder}>
        <img src={loginSvg} alt="" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser(loginData, userType!).then((result) => {
              const { access_token, data } = result;
              updateBearerToken(access_token);
              if (userType == "vendor") {
                navigate("/vendor-dashboard");
                setVendor(data);
              } else {
                navigate("/shop");
                setCustomer(data);
              }
            });
          }}
        >
          <h2>Log in to Adesuwa</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => updateLoginData("email", e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => updateLoginData("password", e.target.value)}
            required
          />
          <button
            type="button"
            className={userType == "vendor" ? styles.user_type_btn : ""}
            onClick={() => setUserType("vendor")}
          >
            I'm a vendor
          </button>
          <button
            type="button"
            className={userType == "customer" ? styles.user_type_btn : ""}
            onClick={() => setUserType("customer")}
          >
            I'm a customer
          </button>
          <SolidButton text="Log in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
