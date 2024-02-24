import styles from "./ProductCard.module.scss";
import { GrEdit } from "react-icons/gr";
import { ProductCardProps } from "./types";
import { useVendorContext } from "../../context/VendorContext/VendorContext";
import { DefaultProductData } from "../../context/VendorContext/types";
import { RiDeleteBinLine } from "react-icons/ri";
import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import { actions } from "../../context/GlobalContext/constants";
import { deleteProduct } from "../../services/api/product";

const ProductCard = ({ product, setShowModal }: ProductCardProps) => {
  const { images, name, price, amount_available } = product;

  const { setProductData, setCategory, setIsEditing, inventory, setInventory } =
    useVendorContext();
  const { setAction } = useGlobalContext();

  const handleDeleteAction = () => {
    setAction(actions.delete);
    actions.delete.actionFunc = () =>
      deleteProduct(product.id).then(() => {
        const updatedInventory = inventory.filter((item) => {
          return item.id != product.id;
        });
        setInventory(updatedInventory);
      });
  };

  const handleEdit = () => {
    setShowModal(true);
    setIsEditing(true);
    setCategory(product.category);
    setProductData(product as unknown as DefaultProductData);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__image_holder}>
        <img src={images[0]} alt="" />
        <button onClick={handleEdit}>
          <GrEdit />
        </button>
        <button onClick={handleDeleteAction}>
          <RiDeleteBinLine />
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
