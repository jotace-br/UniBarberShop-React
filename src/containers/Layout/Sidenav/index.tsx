import menuOpen from "@iconify/icons-mdi/menu-open";
import { Icon } from "@iconify/react";
import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Pxpaylogo from "../../../assets/logo_principal.svg";
import UserImg from "../../../assets/user.jpg";
import { logout } from "../../../services/login"; // import { Container } from './styles';
import SidebarItems from "./SidebarItems";
import {
  Divider,
  Logo,
  StyledMenu,
  StyledSider,
  StyledSubMenu,
  UserInfo,
} from "./style";

interface SidenavProps {
  userInfo?: any;
}

const Sidenav = ({ userInfo: { user } }: SidenavProps) => {
  const location = useLocation();
  const [index] = useState<string>(location.pathname);
  const [selectedKey] = useState<string>(
    index.slice(0, index.lastIndexOf("/"))
  );

  useEffect(() => {}, [location.pathname, selectedKey]);

  const ThreeDotMenu = (
    <Menu>
      <Menu.Item danger onClick={logout}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledSider collapsedWidth="80">
      <Logo src={Pxpaylogo} alt="" />
      <StyledMenu
        defaultSelectedKeys={[`${index}`]}
        defaultOpenKeys={[`${selectedKey}`]}
        mode="inline"
      >
        <StyledMenu.Item icon={<Icon icon={menuOpen} />}>Menu</StyledMenu.Item>
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
      {/* <UpgradeButton>
        <Icon icon={crownIcon} />
        <div className="text-container">
          <p>Faça um upgrade</p>
          <p>em seu plano</p>
        </div>
      </UpgradeButton> */}
      <Divider />

      <UserInfo>
        <img
          src={user.avatar || UserImg}
          alt="user"
          style={{ objectFit: "cover" }}
        />
        <div className="text-container">
          <p>
            {user.name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
        <Dropdown placement="bottomRight" overlay={ThreeDotMenu}>
          <FaEllipsisV />
        </Dropdown>
      </UserInfo>
    </StyledSider>
  );
};

export default Sidenav;
