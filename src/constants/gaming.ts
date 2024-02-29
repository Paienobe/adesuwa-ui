import { v4 as uuid } from "uuid";
import ps from "../assets/sony-ps5.jpeg";
import nintendo from "../assets/nintendo-switch.jpg";
import xbox from "../assets/xbox.webp";
import controller from "../assets/controller.jpeg";
import gamingChair from "../assets/gaming-chair.png";
import gamingMonitor from "../assets/gaming-monitor.jpeg";

export const gamingGallery = [
  {
    id: uuid(),
    name: "PlayStaion",
    img: ps,
    url: "",
  },
  {
    id: uuid(),
    name: "Nintendo",
    img: nintendo,
    url: "",
  },
  {
    id: uuid(),
    name: "Xbox",
    img: xbox,
    url: "",
  },
  {
    id: uuid(),
    name: "Gaming Chair",
    img: gamingChair,
    url: "",
  },
  {
    id: uuid(),
    name: "Game Controller",
    img: controller,
    url: "",
  },
  {
    id: uuid(),
    name: "Gaming monitor",
    img: gamingMonitor,
    url: "",
  },
];
