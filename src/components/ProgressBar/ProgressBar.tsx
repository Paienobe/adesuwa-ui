import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
  return (
    <div className={styles.progress_bar}>
      <div style={{ width: "" }}></div>
    </div>
  );
};

export default ProgressBar;
