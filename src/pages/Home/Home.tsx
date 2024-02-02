import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to="/auth">Get started</Link>
    </div>
  );
};

export default Home;
