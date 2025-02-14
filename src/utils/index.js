import { RiRestaurantFill, RiPhoneFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { FaTag, FaHamburger, FaUtensils } from "react-icons/fa";
import { pizza } from "./constant";

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
  {
    name: "About Us",
    path: "/about",
    icon: FaUtensils,
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

const menuFoodItems = [
  {
    id: 1,
    name: "Hot Rice",
    description: "Delicious and Spicy",
    price: "$15.00",
    image: pizza,
  },
  {
    id: 2,
    name: "Burger",
    description: "Delicious and Spicy",
    price: "$10.00",
    image: pizza,
  },
  {
    id: 3,
    name: "Hot Rice",
    description: "Delicious and Spicy",
    price: "$15.00",
    image: pizza,
  },
  {
    id: 4,
    name: "Momos",
    description: "Delicious and Spicy",
    price: "$25.00",
    image: pizza,
  },
  {
    id: 5,
    name: "Pizza",
    description: "Cheesy and Tasty",
    price: "$20.00",
    image: pizza,
  },
  {
    id: 6,
    name: "Pasta",
    description: "Creamy and Yummy",
    price: "$18.00",
    image: pizza,
  },
  {
    id: 7,
    name: "Sandwich",
    description: "Crunchy and Fresh",
    price: "$12.00",
    image: pizza,
  },
];

export { navLinks, bannerFoodItems, menuOffers, menuFoodItems };
