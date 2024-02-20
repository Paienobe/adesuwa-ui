import Loader from "../Loader/Loader";
import styles from "./SolidButton.module.scss";
import { SolidButtonProps } from "./types";

const SolidButton = ({ text, isLoading }: SolidButtonProps) => {
  return (
    <button className={styles.solid_button}>
      {isLoading ? <Loader size={16} color="white" /> : text}
    </button>
  );
};

export default SolidButton;
