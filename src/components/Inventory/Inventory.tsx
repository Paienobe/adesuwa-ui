import ProductCard from "../ProductCard/ProductCard";
import styles from "./Inventory.module.scss";
import { MdOutlineAdd } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";
import ProductModal from "../AddProductModal/ProductModal";
import { useEffect, useState } from "react";
import { fetchAllVendorProducts } from "../../services/api/product";
import { useVendorContext } from "../../context/VendorContext/VendorContext";

const Inventory = () => {
  const { inventory, setInventory, resetProductData } = useVendorContext();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAllVendorProducts().then((result) => {
      setInventory(result);
    });
  }, []);

  useEffect(() => {
    !showModal && resetProductData();
  }, [showModal]);

  return (
    <div className={styles.inventory}>
      <section className={styles.inventory__header}>
        <p>Your products</p>
        <SearchBar queryHandler={() => {}} placeholder="Search products" />
        <button onClick={() => setShowModal(!showModal)}>
          <MdOutlineAdd /> Add Item
        </button>
      </section>

      {inventory.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            setShowModal={setShowModal}
          />
        );
      })}

      {showModal && <ProductModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Inventory;
