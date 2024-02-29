import { v4 as uuid } from "uuid";
import keyboard from "../assets/keyboard.jpeg";
import desktop from "../assets/desktop.jpeg";
import macbook from "../assets/macbook.jpeg";
import gamingLaptop from "../assets/gaming laptop.jpeg";
import printer from "../assets/printer.jpeg";
import monitor from "../assets/monitor.webp";

export const computingGallery = [
  {
    id: uuid(),
    name: "Keyboard",
    img: keyboard,
    url: "",
  },
  {
    id: uuid(),
    name: "Desktops",
    img: desktop,
    url: "",
  },
  {
    id: uuid(),
    name: "Macbook",
    img: macbook,
    url: "",
  },
  {
    id: uuid(),
    name: "Printer",
    img: printer,
    url: "",
  },
  {
    id: uuid(),
    name: "Gaming Laptop",
    img: gamingLaptop,
    url: "",
  },

  {
    id: uuid(),
    name: "Monitor",
    img: monitor,
    url: "",
  },
];
