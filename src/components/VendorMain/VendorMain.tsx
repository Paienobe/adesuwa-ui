import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import ActionModal from "../ActionModal/ActionModal";
import Inventory from "../Inventory/Inventory";
import styles from "./VendorMain.module.scss";

const VendorMain = () => {
  const { action } = useGlobalContext();

  return (
    <div className={styles.vendor_main}>
      <Inventory />
      {action && <ActionModal />}
    </div>
  );
};

export default VendorMain;
