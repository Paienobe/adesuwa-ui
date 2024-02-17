import { RiLoader2Line } from "react-icons/ri";
import styles from "./Loader.module.scss";

const Loader = ({ size }: LoaderProps) => {
  return (
    <RiLoader2Line className={styles.loader} size={size} color="#407bff" />
  );
};

export default Loader;
