import styles from "./ProductCard.module.scss";
import { GrEdit } from "react-icons/gr";
import { ProductCardProps } from "./types";

const ProductCard = ({ product, setShowModal }: ProductCardProps) => {
  const { images, name, price, amount_available } = product;
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__image_holder}>
        <img src={images[0]} alt="" />
        <button onClick={() => setShowModal(true)}>
          <GrEdit />
        </button>
      </div>
      <div className={styles.product_card__details}>
        <p>{name}</p>
        <div>
          <p>${price}</p>
          <p>{amount_available}pc</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
