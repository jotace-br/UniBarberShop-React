import React from "react";
import { RiNotification2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "../../components/IconButton";
import {BiCog} from 'react-icons/bi'
import Sidenav from "./Sidenav";
import {
  StyledContent,
  StyledHeader,
  MainContainer,
  Wrapper,
  NotificationsBadge,
} from "./style";

interface Props{
  children?: unknown
}
const LayoutDefault: React.FC<Props> = ({children}) => {
  return (
    <>
      <MainContainer>
        <Sidenav/>
        <Wrapper>
          <StyledHeader>
            <h4>Dashboard</h4>
            <div className="icon-wrapper">
              <IconButton>
                <FaSearch></FaSearch>
              </IconButton>
              <NotificationsBadge count={5}  offset={[-10, 0]}>
                <IconButton>
                  <RiNotification2Line></RiNotification2Line>
                </IconButton>
              </NotificationsBadge>
              <IconButton>
                <BiCog></BiCog>
              </IconButton>
            </div>
          </StyledHeader>
          <StyledContent>
            {children}
          </StyledContent>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default LayoutDefault;
