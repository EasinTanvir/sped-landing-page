import { RiRestaurantFill, RiPhoneFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import {
  FaTag,
  FaHamburger,
  FaUtensils,
  FaGlassMartiniAlt,
  FaCoffee,
  FaBirthdayCake,
  FaPizzaSlice,
  FaMugHot,
  FaLeaf,
  FaPepperHot,
  FaHome,
  FaImage,
  FaUserTie,
  FaEnvelope,
} from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";

import {
  chef1,
  chef2,
  chef3,
  chef4,
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

const qualityServices = [
  {
    icon: FaUtensils,
    title: "Restaurant",
    desc: "  Lorem ipsum dolor sit amet, adipiscing elit, sed",
  },
  {
    icon: FaGlassMartiniAlt,
    title: "Bar",
    desc: "  Lorem ipsum dolor sit amet, adipiscing elit, sed",
  },
  {
    icon: FaCoffee,
    title: "Cafe",
    desc: "  Lorem ipsum dolor sit amet, adipiscing elit, sed",
  },
  {
    icon: FaBirthdayCake,
    title: "Dessert",
    desc: "  Lorem ipsum dolor sit amet, adipiscing elit, sed",
  },
];

export const menuItems = [
  {
    id: 1,
    title: "Pulled Chicken Pizza",
    category: "Pizza",
    price: "$30",
    img: pizza,
  },
  {
    id: 2,
    title: "Jamaican Jerk Pizza",
    category: "Pizza",
    price: "$80",
    img: pizza,
  },
  {
    id: 3,
    title: "Margherita Pizza",
    category: "Pizza",
    price: "$25",
    img: pizza,
  },
  {
    id: 4,
    title: "BBQ Chicken Pizza",
    category: "Pizza",
    price: "$35",
    img: pizza,
  },

  {
    id: 5,
    title: "Cold Brew Coffee",
    category: "Cold Drink",
    price: "$10",
    img: todayMenu3,
  },
  {
    id: 6,
    title: "Iced Lemonade",
    category: "Cold Drink",
    price: "$8",
    img: todayMenu3,
  },
  {
    id: 7,
    title: "Strawberry Smoothie",
    category: "Cold Drink",
    price: "$12",
    img: todayMenu3,
  },
  {
    id: 8,
    title: "Mango Iced Tea",
    category: "Cold Drink",
    price: "$9",
    img: todayMenu3,
  },

  {
    id: 9,
    title: "Caesar Salad",
    category: "Salad",
    price: "$15",
    img: pizza,
  },
  {
    id: 10,
    title: "Greek Salad",
    category: "Salad",
    price: "$14",
    img: pizza,
  },
  {
    id: 11,
    title: "Avocado & Quinoa Salad",
    category: "Salad",
    price: "$18",
    img: pizza,
  },

  {
    id: 12,
    title: "Chocolate Cake",
    category: "Sweets",
    price: "$12",
    img: pizza,
  },
  {
    id: 13,
    title: "Strawberry Shortcake",
    category: "Sweets",
    price: "$14",
    img: pizza,
  },
  {
    id: 14,
    title: "Tiramisu",
    category: "Sweets",
    price: "$16",
    img: pizza,
  },

  {
    id: 15,
    title: "Spicy Wings",
    category: "Spicy",
    price: "$18",
    img: pizza,
  },
  {
    id: 16,
    title: "Hot & Spicy Noodles",
    category: "Spicy",
    price: "$16",
    img: pizza,
  },
  {
    id: 17,
    title: "Spicy Tacos",
    category: "Spicy",
    price: "$20",
    img: pizza,
  },
  {
    id: 18,
    title: "Spicy Chicken Wrap",
    category: "Spicy",
    price: "$19",
    img: pizza,
  },

  {
    id: 19,
    title: "Cheeseburger",
    category: "Burger",
    price: "$22",
    img: pizza,
  },
  {
    id: 20,
    title: "BBQ Bacon Burger",
    category: "Burger",
    price: "$24",
    img: pizza,
  },
  {
    id: 21,
    title: "Mushroom Swiss Burger",
    category: "Burger",
    price: "$23",
    img: pizza,
  },
  {
    id: 22,
    title: "Double Patty Burger",
    category: "Burger",
    price: "$26",
    img: pizza,
  },
];

const areMenutabs = [
  { name: "All", icon: FaUtensils },
  { name: "Pizza", icon: FaPizzaSlice },
  { name: "Cold Drink", icon: FaMugHot },
  { name: "Salad", icon: FaLeaf },
  { name: "Sweets", icon: FaBirthdayCake },
  { name: "Spicy", icon: FaPepperHot },
  { name: "Burger", icon: FaHamburger },
];

const masterChefs = [
  {
    id: 1,
    name: "Cotlin Care",
    position: "Senior Chef",
    image: chef1,
  },
  {
    id: 2,
    name: "Sarah Albert",
    position: "Senior Chef",
    image: chef2,
  },
  {
    id: 3,
    name: "John Doe",
    position: "Senior Chef",
    image: chef3,
  },
  {
    id: 4,
    name: "Jemy Carline",
    position: "Junior Chef",
    image: chef4,
  },
  {
    id: 5,
    name: "Michael Smith",
    position: "Executive Chef",
    image: chef2,
  },
  {
    id: 6,
    name: "Emma Brown",
    position: "Sous Chef",
    image: chef1,
  },
  {
    id: 7,
    name: "Liam Johnson",
    position: "Head Chef",
    image: chef4,
  },
  {
    id: 8,
    name: "Olivia Davis",
    position: "Pastry Chef",
    image: chef3,
  },
];

const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: FaHome, current: true },
  {
    name: "HeroBanner",
    href: "/admin/hero-banner",
    icon: FaImage,
  },
  {
    name: "Menu",
    href: "/admin/menu",
    icon: MdMenuBook,
  },
  {
    name: "Today Menu",
    href: "/admin/today-menu",
    icon: LuSquareMenu,
  },
  {
    name: "Service",
    href: "/admin/service",
    icon: MdMiscellaneousServices,
  },
  {
    name: "Chefs",
    href: "/admin/chefs",
    icon: FaUserTie,
  },
  {
    name: "Newsletter",
    href: "/admin/newsletter",
    icon: FaEnvelope,
  },
];
export {
  navLinks,
  bannerFoodItems,
  menuOffers,
  menuFoodItems,
  todayMenuItems,
  qualityServices,
  areMenutabs,
  masterChefs,
  adminNavigation,
};
