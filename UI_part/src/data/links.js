import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/dashboard",
  },
 // {
   // name: "Products",
   // icon: <FiShoppingBag />,
   // subLinks: [
   //   {
      //  name: "All Products",
     //   url: "/products",
    //  },
    //  {
     //   name: "Add Product",
     //   url: "/products/add",
    //  },
      
   // ],
 // },
  
  {
    name: "Generate Project",
    icon: <FiUsers />,
    url: "/customers",
  },

 // {
  //  name: "Orders",
   // icon: <FiShoppingCart />,
   // subLinks: [
   //   {
    //    name: "All Orders",
    //    url: "/orders",
    //  },
      
   // ],
 // },
  
  
  {
    name: "Project Generated",
    icon: <FiSettings />,
    url: "/settings",
 },
  {
    name: "Projects",
    icon: <FiMail />,
    url: "/inbox",
  },
];
