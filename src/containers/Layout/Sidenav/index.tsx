import React, { useEffect, useState } from "react";
import {
  StyledSider,
  StyledMenu,
  StyledSubMenu,
  Logo,
  UpgradeButton,
  Divider,
  UserInfo,
} from "./style";
import Pxpaylogo from "../../../assets/logo_principal.svg";
import SidebarItems from "./SidebarItems";
import { Link, useLocation } from "react-router-dom";

import { Icon } from '@iconify/react';
import crownIcon from '@iconify/icons-mdi/crown';

import UserImg from "../../../assets/user.jpg";
import { FaEllipsisV } from "react-icons/fa";
import menuOpen from '@iconify/icons-mdi/menu-open';
// import { Container } from './styles';
const Sidenav: React.FC = () => {
  const location = useLocation();
  const [index] = useState<string>(location.pathname);
  const [selectedKey] = useState<string>(
    index.slice(0, index.lastIndexOf("/"))
  );
  useEffect(() => {
  }, [location.pathname, selectedKey]);
  return (
    <StyledSider
      collapsedWidth="80"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo src={Pxpaylogo} alt="" />
      <StyledMenu
        defaultSelectedKeys={[`${index}`]}
        defaultOpenKeys={[`${selectedKey}`]}
        mode="inline"
      >
        <StyledMenu.Item icon={<Icon icon={menuOpen} />}>
          Menu
        </StyledMenu.Item>
        {SidebarItems.map(({ isDrop, route, icon, name, labels }) => {
          return isDrop ? (
            <StyledSubMenu key={route} icon={icon} title={name}>
              {labels?.map(({ route, name }) => (
                <StyledMenu.Item key={route}>
                  <Link to={route}>{name}</Link>
                </StyledMenu.Item>
              ))}
            </StyledSubMenu>
          ) : (
            <StyledMenu.Item key={route} icon={icon}>
              <Link to={route}>{name}</Link>
            </StyledMenu.Item>
          );
        })}
      </StyledMenu>
      <UpgradeButton>
        <Icon icon={crownIcon} />
        <div className="text-container">
          <p>Faça um upgrade</p>
          <p>em seu plano</p>
        </div>
      </UpgradeButton>
      <Divider />
      <UserInfo>
        <img src={UserImg} alt="user" />
        <div className="text-container">
          <p>Jéssica Ramos</p>
          <p>Administrador(a)</p>
        </div>
        <FaEllipsisV />
      </UserInfo>
    </StyledSider>
  );
};

export default Sidenav;
