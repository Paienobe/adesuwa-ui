import { v4 as uuid } from "uuid";
import styles from "./VendorSidePanel.module.scss";
import { IoExitOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiUserRectangleLight } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { useVendorContext } from "../../context/VendorContext/VendorContext";
import { useEffect } from "react";

const VendorSidePanel = () => {
  const { searchParams, setSearchParams } = useVendorContext();
  const currentSection = searchParams.get("section");

  const panelOptions = [
    { id: uuid(), title: "Inventory", icon: BsShop },
    { id: uuid(), title: "Orders", icon: CiDeliveryTruck },
    { id: uuid(), title: "Profile", icon: PiUserRectangleLight },
    { id: uuid(), title: "Logout", icon: IoExitOutline },
  ];

  useEffect(() => {
    if (!currentSection) {
      setSearchParams({ section: panelOptions[0].title });
    }
  }, []);

  return (
    <div className={styles.vendor_side_panel}>
      {panelOptions.map((option) => {
        return (
          <button
            key={option.id}
            className={
              currentSection == option.title
                ? styles.vendor_side_panel__selected_section
                : ""
            }
            onClick={() => setSearchParams({ section: option.title })}
          >
            <option.icon size={25} />
            {option.title}
          </button>
        );
      })}
    </div>
  );
};

export default VendorSidePanel;
