import AuthIntro from "../../components/AuthIntro/AuthIntro";
import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <AuthIntro />
    </div>
  );
};

export default Auth;
