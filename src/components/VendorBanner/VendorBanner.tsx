import styles from "./VendorBanner.module.scss";

const VendorBanner = () => {
  return (
    <div className={styles.vendor_banner}>
      <img
        src={
          "https://i.seadn.io/gcs/files/9ab6bfee40eb2d5acd115d79282a7b5e.gif?w=1080&auto=format"
        }
        alt=""
      />
      <div className={styles.vendor_banner__overlay}>
        <img
          src="https://i.seadn.io/gcs/files/40ac42a3fcd971c65d471cadc480aca9.gif?w=500&auto=format"
          alt=""
        />
        <h2>Vendor name</h2>
      </div>
    </div>
  );
};

export default VendorBanner;
