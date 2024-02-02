import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link className={styles.home__start_btn} to="/auth">
        Get started
      </Link>
    </div>
  );
};

export default Home;
