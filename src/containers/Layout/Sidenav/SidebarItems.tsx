import React from "react";
import {
  RiBarChartBoxFill,
  RiDashboardFill,
  RiGridFill,
  RiGroupFill,
  RiMailFill,
  RiShoppingCart2Fill,
} from "react-icons/ri";

const SidebarItems = [
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
    route: "/vendas",
  },
  // {
  //   name: "Gestor Financeiro",
  //   isDrop: false,
  //   icon: <AiFillDollarCircle />,
  //   route: "/vendas",
  // },
  {
    name: "Clientes",
    isDrop: true,
    icon: <RiGroupFill />,
    route: "/clientes",
    labels: [
      { name: "Página 1", route: "/clientes/page1" },
      { name: "Página 2", route: "/clientes/page2" },
      { name: "Página 3", route: "/clientes/page3" },
    ],
  },
  {
    name: "Produtos",
    isDrop: true,
    icon: <RiShoppingCart2Fill />,
    route: "/produtos",
    labels: [
      { name: "Página 1", route: "/produtos/page1" },
      { name: "Página 2", route: "/produtos/page2" },
      { name: "Página 3", route: "/produtos/page3" },
    ],
  },
  {
    name: "Ferramentas",
    isDrop: true,
    icon: <RiGridFill />,
    route: "/ferramentas",
    labels: [
      { name: "Integrações", route: "/ferramentas/integracoes" },
      { name: "API", route: "/ferramentas/api" },
      { name: "Webhooks", route: "/ferramentas/webhooks" },
    ],
  },
  {
    name: "Emails",
    isDrop: false,
    icon: <RiMailFill />,
    route: "/emails",
  },
  // {
  //   name: "Cadastros",
  //   isDrop: true,
  //   icon: <AiOutlineUnorderedList />,
  //   route: "/cadastros",
  //   labels: [
  //     { name: "Página 1", route: "/cadastros/page1" },
  //     { name: "Página 2", route: "/cadastros/page2" },
  //     { name: "Página 3", route: "/cadastros/page3" },
  //   ],
  // },
];

export default SidebarItems;
