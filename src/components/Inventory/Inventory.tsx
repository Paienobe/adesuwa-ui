import ProductCard from "../ProductCard/ProductCard";
import styles from "./Inventory.module.scss";
import { MdOutlineAdd } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import AddProductModal from "../AddProductModal/AddProductModal";

const Inventory = () => {
  return (
    <div className={styles.inventory}>
      <section className={styles.inventory__header}>
        <p>Your products</p>
        <SearchBar queryHandler={() => {}} placeholder="Search products" />
        <button>
          <MdOutlineAdd /> Add Item
        </button>
      </section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <AddProductModal />
    </div>
  );
};

export default Inventory;
