import { v4 as uuid } from "uuid";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { RiShirtFill } from "react-icons/ri";

export const productCategories = [
  { id: uuid(), name: "Phones & Tablet", icon: MdOutlinePhoneIphone },
  { id: uuid(), name: "Appliances", icon: GiWashingMachine },
  { id: uuid(), name: "Computing", icon: FaComputer },
  { id: uuid(), name: "Gaming", icon: IoGameControllerOutline },
  { id: uuid(), name: "Sporting", icon: CiDumbbell },
  { id: uuid(), name: "Fashion", icon: RiShirtFill },
];
