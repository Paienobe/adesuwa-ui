import { useRef, useState } from "react";
import SolidButton from "../SolidButton/SolidButton";
import styles from "./AddProductModal.module.scss";
import { TbCameraPlus } from "react-icons/tb";
import { defaultProductData } from "./constants";
import { checkNumberInputs } from "../../utils/checkNumberInputs";
import Dropdown from "../Dropdown/Dropdown";
import { productCategories } from "../../constants";
import { parseProductData } from "../../utils/parseProductData";
import { createProduct } from "../../services/api/product";

const AddProductModal = () => {
  const fileInputRef = useRef(null);
  const [productData, setProductData] = useState(defaultProductData);
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState("");
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

  const handleCreateProduct = () => {
    const pics: { [x: string]: File } = {};
    images.forEach((image, index) => {
      pics[`file_${index}`] = image;
    });
    const data = {
      ...parseProductData(productData),
      file_length: images.length,
      ...pics,
    };
    createProduct(data);
  };

  return (
    <div className={styles.product_modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleCreateProduct();
        }}
      >
        <h2>Add New Product</h2>
        {!images.length ? (
          <div onClick={handleImageClick}>
            <TbCameraPlus size={50} />
            <p>Add product images</p>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={(e) => handleImageChanges(e)}
              required
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
        <SolidButton text="Create" />
      </form>
    </div>
  );
};

export default AddProductModal;
