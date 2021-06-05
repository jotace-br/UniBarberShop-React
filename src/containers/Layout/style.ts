import { Layout } from 'antd'
import styled from 'styled-components'

import background from 'assets/background.svg'

const { Footer, Content } = Layout

export const MainContainer = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  background: #323232;
  /* background: url(${background}); */
  background-repeat: no-repeat;
  background-size: cover;
`
export const Wrapper = styled(Layout)`
  background: none;
`
export const StyledFooter = styled(Footer)`
  background: none;
`
export const StyledContent = styled(Content)`
  margin: 0;
`
