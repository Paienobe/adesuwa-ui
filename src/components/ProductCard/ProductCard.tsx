import styles from "./ProductCard.module.scss";
import { GrEdit } from "react-icons/gr";

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__image_holder}>
        <img
          src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg"
          alt=""
        />
        <button>
          <GrEdit />
        </button>
      </div>
      <div className={styles.product_card__details}>
        <p>Iphone 13 pro max ultra dynamic super saiyan 3</p>
        <div>
          <p>$850</p>
          <p>50pc</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
