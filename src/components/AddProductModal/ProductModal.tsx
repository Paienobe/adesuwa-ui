import { useRef, useState } from "react";
import SolidButton from "../SolidButton/SolidButton";
import styles from "./AddProductModal.module.scss";
import { TbCameraPlus } from "react-icons/tb";
import { checkNumberInputs } from "../../utils/checkNumberInputs";
import Dropdown from "../Dropdown/Dropdown";
import { productCategories } from "../../constants";
import { parseProductData } from "../../utils/parseProductData";
import {
  ProductData,
  createProduct,
  updateProduct,
} from "../../services/api/product";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ProductModalProps } from "./types";
import { useVendorContext } from "../../context/VendorContext/VendorContext";

const ProductModal = ({ setShowModal }: ProductModalProps) => {
  const {
    inventory,
    setInventory,
    productData,
    setProductData,
    category,
    setCategory,
    isEditing,
    resetProductData,
  } = useVendorContext();

  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const categoryOptions = productCategories.map((category) => {
    return category.name;
  });

  const updateProductData = (field: string, value: string | number) => {
    setProductData({ ...productData, [field]: value });
  };

  const handleImageClick = () => {
    (fileInputRef.current! as HTMLInputElement)!.click();
  };

  const handleImageChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const getFormData = () => {
    const pics: { [x: string]: File } = {};
    images.forEach((image, index) => {
      pics[`file_${index}`] = image;
    });
    const data = {
      ...parseProductData(productData),
      category,
      file_length: images.length,
      ...pics,
    };
    return data;
  };

  const handleCreateOrEdit = () => {
    setIsLoading(true);
    const productAction = isEditing
      ? updateProduct(getFormData() as ProductData)
      : createProduct(getFormData() as ProductData);

    productAction
      .then((result) => {
        if (!isEditing) {
          setInventory([...inventory, result]);
        } else {
          const filteredInventory = inventory.filter((item) => {
            return item.id != result.id;
          });
          setInventory([...filteredInventory, result]);
        }
      })
      .finally(() => {
        setIsLoading(false);
        resetProductData();
        setShowModal(false);
      });
  };

  useOutsideClick(formRef, setShowModal, styles.product_modal__form);

  return (
    <div className={styles.product_modal}>
      <form
        className={styles.product_modal__form}
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateOrEdit();
        }}
      >
        <h2>{!isEditing ? "Add New " : "Update "}Product</h2>
        {!images.length ? (
          <div onClick={handleImageClick}>
            <TbCameraPlus size={50} />
            <p>{!isEditing ? "Add " : "Change "} product images</p>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={(e) => handleImageChanges(e)}
              required={!isEditing}
            />
          </div>
        ) : (
          <div className={styles.product_modal__preview_container}>
            <img src={URL.createObjectURL(images[0])} alt="" />
            <div>{images.length}</div>
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="Product name"
            value={productData.name}
            onChange={(e) => updateProductData("name", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Price $"
            value={productData.price}
            onChange={(e) => {
              checkNumberInputs(e, () =>
                updateProductData("price", e.target.value)
              );
            }}
            required
          />
          <input
            type="text"
            placeholder="Amount available"
            value={productData.amount_available}
            onChange={(e) => {
              checkNumberInputs(e, () =>
                updateProductData("amount_available", e.target.value)
              );
            }}
            required
          />
          <input
            type="text"
            placeholder="Discount %"
            value={productData.discount}
            onChange={(e) => {
              checkNumberInputs(e, () =>
                updateProductData("discount", e.target.value)
              );
            }}
            required
          />
          <Dropdown
            defaultText="Select Category"
            options={categoryOptions}
            selectedOption={category}
            setSelectedOption={setCategory}
            searchBarPlaceholder="Search Category"
          />
          <textarea
            placeholder="Product description"
            rows={5}
            value={productData.description}
            onChange={(e) => updateProductData("description", e.target.value)}
            required
          ></textarea>
        </div>
        <SolidButton
          text={isEditing ? "Update Product" : "Create Product"}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default ProductModal;
