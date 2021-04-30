import styled from "styled-components";
import background from "../../assets/background.svg";
import { Badge, Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { ButtonPrimary } from "../../components/Button";

const { Header, Footer, Sider, Content } = Layout;

export const Logo = styled.img`
  width: 139px;
  height: 58px;
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const MainContainer = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Wrapper = styled(Layout)`
  background: none;
`;
export const StyledHeader = styled(Header)`
  background-color: transparent;
  margin-left: 70px;
  padding-left: 0px;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-wrapper{
    display: flex;
  }
  h4 {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const StyledFooter = styled(Footer)`
  background: none;
`;
export const StyledSider = styled(Sider)`
  margin-left: 39px;
  background-color: transparent;
  .ant-menu,
  .ant-menu .ant-menu-sub {
    background-color: transparent;
    border-right: none;
  }
`;
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
    width: 30px;
    height: 30px;
    opacity: 0.6;
  }
`;
export const Divider = styled.hr`
  margin: 30px 0px;
  color: #2C2C2C;
`;
export const NotificationsBadge = styled(Badge)`
  sup{
    width: 21px;
    height: 21px;
    box-shadow: none;
    background-color: #e6be27;
    span>p{
      font-size: 14px;
      font-weight: 700;
    }
  }
  
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  img{
    width: 40px;
    height: 40px;
    border: 3px solid #262626;
    border-radius: 50%;
    -webkit-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.30);
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.30);
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
    color: #4A4A4A;
    cursor: pointer;
    padding: 4px;
  }

`;
export const StyledMenu = styled(Menu)`
  .ant-menu-item,
  .ant-menu-submenu-title {
    height: 54px !important;
    display: flex;
    align-items: center;
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
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow{
      color: #fff;
    }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: transparent;
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
`;
export const StyledSubMenu = styled(SubMenu)`
  svg {
    margin-right: 12px;
  }
`;
export const StyledContent = styled(Content)`
  margin-left: 70px;
`;
