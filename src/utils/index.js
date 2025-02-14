import { RiRestaurantFill, RiPhoneFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { FaTag, FaHamburger, FaUtensils } from "react-icons/fa";

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

const bannerFoodItems = [
  "Freezing Ice Cream",
  "Pizza Vendor",
  "Indonesian Traditional Food",
  "Vegetarian Specialty",
];

const menuOffers = [
  {
    id: 1,
    icon: FaTag,
    title: "Discount Voucher",
    description: "Lorem ipsum dolor sit amet lorem ipsum",
  },
  {
    id: 2,
    icon: FaHamburger,
    title: "Fresh Healthy Food",
    description: "Lorem ipsum dolor sit amet lorem ipsum",
  },
  {
    id: 3,
    icon: FaUtensils,
    title: "Fast Serve On Table",
    description: "Lorem ipsum dolor sit amet lorem ipsum",
  },
];

export { navLinks, bannerFoodItems, menuOffers };
