import React from "react";
import {
  AiFillHome,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import {
  RiDashboardFill,
  RiBarChartBoxFill,
  RiGroupFill,
  RiShoppingCart2Fill,
  RiGridFill,
  RiFileTextFill,
  RiMailFill,
} from "react-icons/ri";

const SidebarItems = [
  {
    name: "Home",
    isDrop: false,
    icon: <AiFillHome />,
    route: "/",
  },
  {
    name: "Dashboard",
    isDrop: false,
    icon: <RiDashboardFill />,
    route: "/dashboard",
  },
  {
    name: "Vendas",
    isDrop: false,
    icon: <RiBarChartBoxFill />,
    route: "/financial",
  },
  {
    name: "Clientes",
    isDrop: true,
    icon: <RiGroupFill />,
    route: "/customers",
    labels: [
      { name: "Página 1", route: "/customers/page1" },
      { name: "Página 2", route: "/customers/page2" },
      { name: "Página 3", route: "/customers/page3" },
    ],
  },
  {
    name: "Produtos",
    isDrop: true,
    icon: <RiShoppingCart2Fill />,
    route: "/products",
    labels: [
      { name: "Página 1", route: "/products/page1" },
      { name: "Página 2", route: "/products/page2" },
      { name: "Página 3", route: "/products/page3" },
    ],
  },
  {
    name: "Relatórios",
    isDrop: false,
    icon: <RiFileTextFill />,
    route: "/reports",
  },
  {
    name: "Ferramentas",
    isDrop: true,
    icon: <RiGridFill />,
    route: "/tools",
    labels: [
      { name: "Página 1", route: "/tools/page1" },
      { name: "Página 2", route: "/tools/page2" },
      { name: "Página 3", route: "/tools/page3" },
    ],
  },
  {
    name: "Emails",
    isDrop: false,
    icon: <RiMailFill />,
    route: "/emails",
  },
  {
    name: "Cadastros",
    isDrop: true,
    icon: <AiOutlineUnorderedList />,
    route: "/registrations",
    labels: [
      { name: "Página 1", route: "/registrations/page1" },
      { name: "Página 2", route: "/registrations/page2" },
      { name: "Página 3", route: "/registrations/page3" },
    ],
  },
];

export default SidebarItems;
