import Inventory from "../Inventory/Inventory";
import styles from "./VendorMain.module.scss";

const VendorMain = () => {
  return (
    <div className={styles.vendor_main}>
      <Inventory />
    </div>
  );
};

export default VendorMain;
