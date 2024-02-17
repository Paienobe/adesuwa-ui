import ProductCard from "../ProductCard/ProductCard";
import styles from "./Inventory.module.scss";
import { MdOutlineAdd } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import ProductModal from "../AddProductModal/ProductModal";
import { useState } from "react";

const Inventory = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.inventory}>
      <section className={styles.inventory__header}>
        <p>Your products</p>
        <SearchBar queryHandler={() => {}} placeholder="Search products" />
        <button onClick={() => setShowModal(!showModal)}>
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
      {showModal && <ProductModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Inventory;
