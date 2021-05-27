import styled from 'styled-components'

import { Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { ButtonPrimary } from '../../../components/Button'

const { Sider } = Layout

export const Logo = styled.img`
  width: 139px;
  height: 58px;
  margin-top: 25px;
  margin-bottom: 25px;
  --webkit-filter: drop-shadow(4px 0px 15px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.3));
`

export const StyledSider = styled(Sider)`
  margin-left: 39px;
  background-color: transparent;
  .ant-menu,
  .ant-menu .ant-menu-sub {
    background-color: transparent;
    border-right: none;
  }
`
export const UpgradeButton = styled(ButtonPrimary)`
  margin-top: 56px;
  width: 207px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text-container {
    margin-left: 8px;
    font-size: 12px;
    text-align: left;
    p {
      line-height: 160%;
      margin-bottom: 0;
    }
    p:first-child {
      font-weight: 700;
    }
    p:last-child {
      font-weight: 300;
    }
  }
  svg {
    width: 41px;
    height: 41px;
    opacity: 0.6;
  }
`
export const Divider = styled.hr`
  margin: 30px 0px;
  color: ${props => props.theme.colors.black70};
  border: 1px solid ${props => props.theme.colors.black70};
  background-color: ${props => props.theme.colors.black70};
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  img {
    width: 40px;
    height: 40px;
    border: 3px solid #262626;
    border-radius: 50%;
    -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);
  }
  .text-container {
    margin-left: 8px;
    font-size: 12px;
    text-align: left;
    p {
      line-height: 160%;
      margin-bottom: 0;
    }
    p:first-child {
      font-weight: 700;
    }
    p:last-child {
      font-weight: 300;
    }
  }
  svg {
    width: auto;
    height: 24px;
    color: #4a4a4a;
    cursor: pointer;
    padding: 4px;
    margin-left: 24px;
    margin-right: -16px;
  }
`
export const StyledMenu = styled(Menu)`
  .ant-menu-submenu.ant-menu-submenu-vertical
    > .ant-menu-submenu-title
    > span:nth-child(2) {
    display: inline-block;
    opacity: 0;
  }

  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid #e6be27;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    height: 54px !important;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 0 !important;
  }
  .ant-menu .ant-menu-sub .ant-menu-inline {
    transition: 0;
  }
  .ant-menu-item,
  .ant-menu-item a,
  .ant-menu-submenu-title,
  .ant-menu-submenu-title i {
    /*display: flex;
    align-items: center;
    margin: 14px 0px 14px 0px; */
    padding-left: 0 !important;
    font-size: 16px;
    color: #fff;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    margin-left: 36px;
    width: 164px;
  }
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: #fff;
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: transparent;
  }
  .ant-menu-item:hover {
    background-color: transparent !important;
    font-weight: 700;
    svg {
      color: #e6be27;
    }
    &:after {
      height: 26px;
      width: 4px;
      background: #e6be27;
      margin-top: 13px;
      border: 0;
    }
  }
  .ant-menu-item-selected {
    background-color: transparent !important;
    font-weight: 700;
    svg {
      color: #e6be27;
    }
    &:after {
      height: 26px;
      width: 4px;
      background: #e6be27;
      margin-top: 13px;
      border: 0;
    }
  }
`
export const StyledSubMenu = styled(SubMenu)`
  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s,
      color 0.3s;
    box-sizing: border-box;
  }

  svg {
    margin-right: 10px;
  }
`

export const SubmenuIcon = styled.span`
  flex: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: inherit;
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;

  svg:hover {
    color: #e6be27;
  }
`
