import ProductCategoryTile from "../../components/ProductCategoryTile/ProductCategoryTile";
import styles from "./Shop.module.scss";
import ad from "../../assets/712_X_384-jpay.png";
import CategoryDisplay from "../../components/CategoryDisplay/CategoryDisplay";
import { electronicsGallery } from "../../constants/electronics";
import { gamingGallery } from "../../constants/gaming";
import { computingGallery } from "../../constants/computing";
import { beautyGallery } from "../../constants/health&beauty";
import { phoneGallery } from "../../constants/phones";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <section className={styles.shop__home_grid}>
        <ProductCategoryTile />
        <div className={styles.shop__home_grid_ad_container}>
          <img src={ad} alt="" />
        </div>
      </section>

      <CategoryDisplay title="Electronics" productTypes={electronicsGallery} />
      <CategoryDisplay title="Gaming" productTypes={gamingGallery} />
      <CategoryDisplay title="Computing" productTypes={computingGallery} />
      <CategoryDisplay title="Health & Beauty" productTypes={beautyGallery} />
      <CategoryDisplay title="Phones & Tablets" productTypes={phoneGallery} />
    </div>
  );
};

export default Shop;
