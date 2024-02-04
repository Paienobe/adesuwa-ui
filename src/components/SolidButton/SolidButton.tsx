import styles from "./SolidButton.module.scss";
import { SolidButtonProps } from "./types";

const SolidButton = ({ text }: SolidButtonProps) => {
  return <button className={styles.solid_button}>{text}</button>;
};

export default SolidButton;
