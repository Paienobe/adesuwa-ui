import { v4 as uuid } from "uuid";
import styles from "./VendorSidePanel.module.scss";
import { IoExitOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiUserRectangleLight } from "react-icons/pi";
import { BsShop } from "react-icons/bs";

const VendorSidePanel = () => {
  const panelOptions = [
    { id: uuid(), title: "Inventory", icon: BsShop },
    { id: uuid(), title: "Orders", icon: CiDeliveryTruck },
    { id: uuid(), title: "Profile", icon: PiUserRectangleLight },
    { id: uuid(), title: "Logout", icon: IoExitOutline },
  ];
  return (
    <div className={styles.vendor_side_panel}>
      {panelOptions.map((option) => {
        return (
          <button key={option.id}>
            <option.icon size={25} />
            {option.title}
          </button>
        );
      })}
    </div>
  );
};

export default VendorSidePanel;
