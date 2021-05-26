import React from 'react'
import {
  RiBarChartBoxFill,
  RiDashboardFill,
  RiGridFill,
  RiGroupFill,
  RiMailFill,
  RiShoppingCart2Fill,
} from 'react-icons/ri'

import { SubmenuIcon } from './style'

const SidebarItems = [
  {
    name: 'Dashboard',
    isDrop: false,
    icon: <RiDashboardFill />,
    route: '/dashboard',
  },
  {
    name: 'Vendas',
    isDrop: false,
    icon: <RiBarChartBoxFill />,
    route: '/vendas',
  },
  // {
  //   name: "Gestor Financeiro",
  //   isDrop: false,
  //   icon: <AiFillDollarCircle />,
  //   route: "/vendas",
  // },
  {
    name: 'Clientes',
    isDrop: true,
    icon: (
      <SubmenuIcon>
        <RiGroupFill />
      </SubmenuIcon>
    ),
    route: '/clientes',
    labels: [
      { name: 'Página 1', route: '/clientes/page1' },
      { name: 'Página 2', route: '/clientes/page2' },
      { name: 'Página 3', route: '/clientes/page3' },
    ],
  },
  {
    name: 'Produtos',
    isDrop: false,
    icon: <RiShoppingCart2Fill />,
    route: '/produtos',
  },
  {
    name: 'Ferramentas',
    isDrop: true,
    icon: (
      <SubmenuIcon>
        <RiGridFill />
      </SubmenuIcon>
    ),
    route: '/ferramentas',
    labels: [
      { name: 'Integrações', route: '/ferramentas/integracoes' },
      { name: 'API', route: '/ferramentas/api' },
      { name: 'Webhooks', route: '/ferramentas/webhooks' },
    ],
  },
  {
    name: 'Emails',
    isDrop: false,
    icon: <RiMailFill />,
    route: '/emails',
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
]

export default SidebarItems
