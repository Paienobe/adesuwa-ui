import { InventoryItem } from "../../context/VendorContext/types";

export type ProductCardProps = {
  product: InventoryItem;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
