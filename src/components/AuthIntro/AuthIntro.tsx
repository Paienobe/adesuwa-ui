import styles from "./AuthIntro.module.scss";
import customerSvg from "../../assets/customer_2.svg";
import vendorSvg from "../../assets/vendor.svg";
import { v4 as uuid } from "uuid";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { UserOptionsType } from "../../context/AuthContext/type";

const AuthIntro = () => {
  const { userType, setUserType, setAuthStage } = useAuthContext();
  const userOptions: UserOptionsType[] = [
    {
      id: uuid(),
      type: "customer",
      msg: "I'm a customer, I want to shop",
      image: customerSvg,
    },
    {
      id: uuid(),
      type: "vendor",
      msg: "I'm a vendor, I want to sell items",
      image: vendorSvg,
    },
  ];
  return (
    <div className={styles.auth_intro}>
      <h1>Join us as a customer or vendor</h1>

      <section className={styles.auth_intro__user_type_holder}>
        {userOptions.map((option) => {
          return (
            <div
              key={option.id}
              className={`${styles.auth_intro__user_type} ${
                option.type == userType ? styles.auth_intro__selected_type : ""
              }`}
              onClick={() => setUserType(option.type)}
            >
              <img src={option.image} alt="" />
              <p>{option.msg}</p>
            </div>
          );
        })}
      </section>

      <button
        className={styles.auth_intro__join_btn}
        disabled={!userType}
        onClick={() => setAuthStage("registration")}
      >
        {userType ? `Join as ${userType}` : "Create Account"}
      </button>

      <p>
        Already have an account?{" "}
        <button
          className={styles.auth_intro__login_btn}
          onClick={() => setAuthStage("login")}
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default AuthIntro;
