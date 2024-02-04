import AuthIntro from "../../components/AuthIntro/AuthIntro";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import styles from "./Auth.module.scss";

const Auth = () => {
  const { authStage } = useAuthContext();
  return (
    <div className={styles.auth}>
      {authStage == "user-type-selection" && <AuthIntro />}
      {authStage == "registration" && <Registration />}
      {authStage == "login" && <Login />}
    </div>
  );
};

export default Auth;
