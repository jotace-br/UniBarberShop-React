import React from 'react'

import Header from './Header'

import { MainContainer, StyledContent, Wrapper } from './style'

interface Props {
  children?: unknown
}
const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainContainer>
        <Wrapper>
          <Header />
          <StyledContent>{children}</StyledContent>
        </Wrapper>
      </MainContainer>
    </>
  )
}

export default LayoutDefault
