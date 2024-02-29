import { v4 as uuid } from "uuid";

import tv from "../assets/tv.jpeg";
import freezer from "../assets/freezer.jpg";
import blender from "../assets/blender.jpg";
import washingMachine from "../assets/washing-machine.jpeg";
import airConditioner from "../assets/air-conditioner.jpg";
import camera from "../assets/camera.jpeg";

export const electronicsGallery = [
  {
    id: uuid(),
    name: "Television",
    img: tv,
    url: "",
  },
  {
    id: uuid(),
    name: "Freezer",
    img: freezer,
    url: "",
  },
  {
    id: uuid(),
    name: "Blender",
    img: blender,
    url: "",
  },
  {
    id: uuid(),
    name: "Washing Machine",
    img: washingMachine,
    url: "",
  },
  {
    id: uuid(),
    name: "Air conditioner",
    img: airConditioner,
    url: "",
  },
  {
    id: uuid(),
    name: "Camera",
    img: camera,
    url: "",
  },
];
