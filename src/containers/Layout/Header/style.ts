import styled from "styled-components";
import { Badge, Layout } from "antd";

const { Header } = Layout;

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
export const Title = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: capitalize;
`