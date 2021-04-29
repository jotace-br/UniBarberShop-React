import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";

import { Link, useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import styled from "styled-components";

const { Sider } = Layout;
const { SubMenu } = Menu;
// import { Container } from './styles';

const StyledSubMenu = styled(SubMenu)`
  svg {
    margin-right: 12px;
  }
`;
const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

const Sidebar: React.FC = () => {
  //quando inicia
  const location = useLocation();
  const [index] = useState<string>(location.pathname);
  const [selectedKey] = useState<string>(
    index.slice(0, index.lastIndexOf("/"))
  );

  useEffect(() => {
    console.log(location.pathname);
    console.log(selectedKey);
  }, [location.pathname, selectedKey]);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[`${index}`]}
        defaultOpenKeys={[`${selectedKey}`]}
      >
        {SidebarItems.map(({ isDrop, route, icon, name, labels }) => {
          return isDrop ? (
            <StyledSubMenu key={route} icon={icon} title={name}>
              {labels?.map(({ route, name }) => (
                <Menu.Item key={route}>
                  <Link to={route}>{name}</Link>
                </Menu.Item>
              ))}
            </StyledSubMenu>
          ) : (
            <Menu.Item key={route} icon={icon}>
              <Link to={route}>{name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
