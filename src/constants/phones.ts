import { v4 as uuid } from "uuid";
import iphone from "../assets/iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1__en-US.webp";
import ipad from "../assets/ipad.jpg";
import samsung from "../assets/samsung.png";
import pixel from "../assets/google-pixel.webp";
import xiaomi from "../assets/xiaomi.jpeg";
import oppo from "../assets/oppo.jpeg";

export const phoneGallery = [
  {
    id: uuid(),
    name: "Iphone",
    img: iphone,
    url: "",
  },
  {
    id: uuid(),
    name: "Ipad",
    img: ipad,
    url: "",
  },
  {
    id: uuid(),
    name: "Samsung",
    img: samsung,
    url: "",
  },
  {
    id: uuid(),
    name: "Xiaomi",
    img: xiaomi,
    url: "",
  },
  {
    id: uuid(),
    name: "Pixel",
    img: pixel,
    url: "",
  },

  {
    id: uuid(),
    name: "Oppo",
    img: oppo,
    url: "",
  },
];
