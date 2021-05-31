import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Dropdown, Menu } from 'antd'
import {
  Divider,
  Logo,
  StyledMenu,
  StyledSider,
  StyledSubMenu,
  UserInfo,
} from './style'
import SidebarItems from './SidebarItems'

import { logout } from 'services/login'

import { FaEllipsisV } from 'react-icons/fa'

import { Icon } from '@iconify/react'
import menuIcon from '@iconify/icons-mdi/menu'
import menuOpen from '@iconify/icons-mdi/menu-open'

import Pxpaylogo from 'assets/logo_principal.svg'
import UserImg from 'assets/user-circle.svg'

interface SidenavProps {
  userInfo?: any
}

const Sidenav = ({ userInfo: { user } }: SidenavProps) => {
  const location = useLocation()
  const [index] = useState<string>(location.pathname)
  const [selectedKey] = useState<string>(index.slice(0, index.lastIndexOf('/')))
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {}, [location.pathname, selectedKey])

  const dropdownPhoto = () => {
    console.log('dropdown')
  }

  const ThreeDotMenu = (
    <Menu>
      <Menu.Item danger onClick={logout}>
        Sair
      </Menu.Item>
    </Menu>
  )

  return (
    <StyledSider collapsed={isCollapsed} collapsedWidth="80">
      <Logo src={Pxpaylogo} alt="" />
      <StyledMenu
        defaultSelectedKeys={[`${index}`]}
        defaultOpenKeys={[`${selectedKey}`]}
        mode="inline"
      >
        <StyledMenu.Item
          icon={<Icon icon={isCollapsed ? menuIcon : menuOpen} />}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
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
          )
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
        <div onClick={() => dropdownPhoto()}>
          <img
            src={user?.avatar || UserImg}
            alt="user"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {!isCollapsed && (
          <div className="text-container">
            <p>
              {user?.name} {user?.last_name}
            </p>
            <p>{user?.email}</p>
          </div>
        )}
        <Dropdown placement="bottomRight" overlay={ThreeDotMenu}>
          <FaEllipsisV />
        </Dropdown>
      </UserInfo>
    </StyledSider>
  )
}

export default Sidenav
