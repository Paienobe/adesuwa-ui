import { productCategories } from "../../constants/product-category";
import styles from "./ProductCategoryTile.module.scss";

const ProductCategoryTile = () => {
  return (
    <div className={styles.category_tile}>
      {productCategories.map((category) => {
        return (
          <button key={category.id}>
            <category.icon size={20} />
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default ProductCategoryTile;
