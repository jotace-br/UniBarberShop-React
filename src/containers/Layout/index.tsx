import React from "react";
import { useUser } from "../../services/user";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { MainContainer, StyledContent, Wrapper } from "./style";

interface Props {
  children?: unknown;
}
const LayoutDefault: React.FC<Props> = ({ children }) => {
  const { data } = useUser();

  if (!data) return <p>Carregando...</p>;

  return (
    <>
      <MainContainer>
        <Sidenav userInfo={data} />
        <Wrapper>
          <Header />
          <StyledContent>{children}</StyledContent>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default LayoutDefault;
