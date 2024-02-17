import VendorBanner from "../../components/VendorBanner/VendorBanner";
import styles from "./vendor.module.scss";
import VendorSidePanel from "../../components/VendorSidePanel/VendorSidePanel";
import VendorMain from "../../components/VendorMain/VendorMain";
import { useVendorContext } from "../../context/VendorContext/VendorContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Vendor = () => {
  const navigate = useNavigate();
  const { vendor } = useVendorContext();

  useEffect(() => {
    console.log(vendor);
    if (!vendor) {
      navigate("/");
    }
  }, [vendor]);

  return (
    <div className={styles.vendor}>
      <section className={styles.vendor__metadata}>
        <VendorBanner />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil
          cum, molestiae voluptatem doloremque vero consectetur ea mollitia
          reprehenderit doloribus eaque, beatae perspiciatis numquam vel
          quisquam delectus. Reiciendis, velit exercitationem!
        </p>
      </section>

      <section className={styles.vendor__main_body}>
        <VendorSidePanel />
        <VendorMain />
      </section>
    </div>
  );
};

export default Vendor;
