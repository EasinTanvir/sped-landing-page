import { RiRestaurantFill, RiPhoneFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";

const navLinks = [
  { name: "Home", path: "/", icon: BiHomeAlt },
  {
    name: "Menu",
    path: "/menu",
    icon: RiRestaurantFill,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: RiPhoneFill,
  },
];
export { navLinks };
