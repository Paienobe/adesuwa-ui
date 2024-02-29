import { v4 as uuid } from "uuid";
import shampoo from "../assets/shampoo.webp";
import wig from "../assets/wig.jpg";
import perfume from "../assets/perfume.webp";
import lotion from "../assets/lotion.jpeg";
import makeup from "../assets/makeup.jpg";
import mask from "../assets/Mask-Main.jpg";

export const beautyGallery = [
  {
    id: uuid(),
    name: "Shampoo",
    img: shampoo,
    url: "",
  },
  {
    id: uuid(),
    name: "Wig",
    img: wig,
    url: "",
  },
  {
    id: uuid(),
    name: "Perfume",
    img: perfume,
    url: "",
  },
  {
    id: uuid(),
    name: "Lotion",
    img: lotion,
    url: "",
  },
  {
    id: uuid(),
    name: "Makeup",
    img: makeup,
    url: "",
  },
  {
    id: uuid(),
    name: "Mask",
    img: mask,
    url: "",
  },
];
