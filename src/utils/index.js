import { RiRestaurantFill, RiPhoneFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { FaTag, FaHamburger, FaUtensils } from "react-icons/fa";
import {
  pizza,
  todayMenu1,
  todayMenu2,
  todayMenu3,
  todayMenu4,
} from "./constant";

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

const todayMenuItems = [
  {
    id: 1,
    title: "Pasta",
    price: "$35.00",
    image: todayMenu1,
    description: "Lorem ipsum dolor sit amet, dipiscing elit, sed",
    topSeller: true,
  },
  {
    id: 2,
    title: "Oreo Shake",
    description: "Lorem ipsum dolor sit amet, dipiscing elit, sed",
    image: todayMenu2,
    topSeller: true,
    price: "$35.00",
  },
  {
    id: 3,
    title: "Dal Fry",
    description: "Lorem ipsum dolor sit amet, dipiscing elit, sed",
    image: todayMenu3,
    topSeller: true,
    price: "$35.00",
  },
  {
    id: 4,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet, dipiscing elit, sed",
    image: todayMenu4,
    topSeller: true,
    price: "$35.00",
  },
];

export { navLinks, bannerFoodItems, menuOffers, menuFoodItems, todayMenuItems };
