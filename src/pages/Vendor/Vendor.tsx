import VendorBanner from "../../components/VendorBanner/VendorBanner";
import styles from "./vendor.module.scss";
import VendorSidePanel from "../../components/VendorSidePanel/VendorSidePanel";
import VendorMain from "../../components/VendorMain/VendorMain";

const Vendor = () => {
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
