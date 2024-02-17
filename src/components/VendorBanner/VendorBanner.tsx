import { useVendorContext } from "../../context/VendorContext/VendorContext";
import styles from "./VendorBanner.module.scss";
import defaultLogo from "../../assets/profile.png";
import defaultBanner from "../../assets/cover.png";

const VendorBanner = () => {
  const { vendor } = useVendorContext();
  return (
    <div className={styles.vendor_banner}>
      <img src={vendor?.banner_image || defaultBanner} alt="" />
      <div className={styles.vendor_banner__overlay}>
        <div>
          <img src={vendor?.profile_image || defaultLogo} alt="" />
        </div>
        <h2>{vendor?.business_name}</h2>
      </div>
    </div>
  );
};

export default VendorBanner;
