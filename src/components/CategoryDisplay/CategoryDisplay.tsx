import styles from "./CategoryDisplay.module.scss";
import { CategoryDisplayProps } from "./types";

const CategoryDisplay = ({ productTypes, title }: CategoryDisplayProps) => {
  return (
    <div className={styles.category_display}>
      <div>{title}</div>
      <div>
        {productTypes?.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.category_display__product_type}
            >
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDisplay;
