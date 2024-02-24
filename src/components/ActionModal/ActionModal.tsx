import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import SolidButton from "../SolidButton/SolidButton";
import styles from "./ActionModal.module.scss";

const ActionModal = () => {
  const { action, setAction } = useGlobalContext();

  return (
    <div className={styles.action_modal}>
      <div className={styles.action_modal__main}>
        <h1>Are you sure?</h1>
        <p>{action?.message}</p>
        <div>
          <SolidButton text="Cancel" onClick={() => setAction(null)} />
          <SolidButton
            text={action?.action!}
            onClick={() => {
              action?.actionFunc?.().then(() => {
                setAction(null);
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
