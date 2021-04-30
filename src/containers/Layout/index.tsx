import React from "react";
import {
  StyledContent,
  MainContainer,
  Wrapper,
} from "./style";
import Header from "./Header";
import Sidenav from "./Sidenav";

interface Props{
  children?: unknown
}
const LayoutDefault: React.FC<Props> = ({children}) => {
  return (
    <>
      <MainContainer>
        <Sidenav/>
        <Wrapper>
          <Header />
          <StyledContent>
            {children}
          </StyledContent>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default LayoutDefault;
