import React from "react";

import {
  AiFillLayout,
  AiFillPieChart,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { FaUsers, FaGraduationCap, FaBookOpen, FaUser } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";

const SidebarItems = [
  {
    name: "Home",
    isDrop: false,
    icon: <AiFillPieChart />,
    route: "/",
  },
  {
    name: "Dashboard",
    isDrop: false,
    icon: <FaUsers />,
    route: "/dashboard",
  },
  {
    name: "Vendas",
    isDrop: false,
    icon: <AiFillLayout />,
    route: "/financial",
  },
  {
    name: "Clientes",
    isDrop: true,
    icon: <FaGraduationCap />,
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
    icon: <FaBookOpen />,
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
    icon: <IoChatbox />,
    route: "/reports",
  },
  {
    name: "Ferramentas",
    isDrop: true,
    icon: <IoIosChatboxes />,
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
    icon: <FaUser />,
    route: "/emails",
  },
  {
    name: "Cadastros",
    isDrop: true,
    icon: <AiOutlineAreaChart />,
    route: "/registrations",
    labels: [
      { name: "Página 1", route: "/registrations/page1" },
      { name: "Página 2", route: "/registrations/page2" },
      { name: "Página 3", route: "/registrations/page3" },
    ],
  },
];

export default SidebarItems;
