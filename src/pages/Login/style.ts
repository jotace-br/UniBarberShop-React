import styled from 'styled-components';
import {ReactComponent as LoginIllustration} from '../../assets/background_login.svg'
import { ButtonPrimary } from '../../components/Button';
import {ReactComponent as PxPayLogo} from '../../assets/logo_principal.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${props=>props.theme.colors.black100};
`

export const Background = styled.div`
  background-color: ${props=>props.theme.colors.black100};
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Heading = styled.div`
  text-align: center;
  position: absolute;
  top: 138px;
  z-index: 999;
  p:first-child{
    font: 400 34px/160% 'Nunito', sans-serif;
  }
  p:last-child{
    font: 600 68px/160% 'Nunito', sans-serif;
    color: ${props=>props.theme.colors.primary90} !important;
    margin-top: -16px;
}
`;

export const Illustration = styled(LoginIllustration)`
  width: 687px;
  height: 848px;
  margin-top: 1;
`
export const FormLogin = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props=>props.theme.colors.black100};
  height: 100vh;
  width: 40vw;
  box-shadow: 0px 0px 250px 0px rgba(0,0,0,.5);
  border-left: 8px solid ${props=>props.theme.colors.black90};
`

export const LoginButton = styled(ButtonPrimary)`
  width: 100%;
`

export const SubButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`
export const ContainerForm = styled.div`
  width: 460px;
  margin: 72px 60px;
`
export const Logo = styled(PxPayLogo)`
  margin-bottom: 60px;
`
export const HeadingForm = styled.div`
  margin-bottom: 40px;
  p:first-child{
    font: ${props=>props.theme.text.h5};
    color: ${props=>props.theme.colors.black10} !important;
  }
  p:last-child{
    font: ${props=>props.theme.text.text_medium};
    color: ${props=>props.theme.colors.black30} !important;
  }
`
export const DividerOr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 0;
  hr{
    width: 211px;
    color: ${props=>props.theme.colors.black60} !important;
    background-color: ${props=>props.theme.colors.black60} !important;
    border-color: ${props=>props.theme.colors.black60} !important;
  }
  p{
    color: ${props=>props.theme.colors.black40} !important;
    font: ${props=>props.theme.text.subtitle};
  }
`
export const RegistrationLabel = styled.p`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  color: ${props=>props.theme.colors.black10} !important;
  font: ${props=>props.theme.text.text_small};
  a{
    font: ${props=>props.theme.text.text_small_bold};
  }
`
export const ContainerSocial = styled.div`
  p{
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    color: ${props=>props.theme.colors.black30} !important;
    font: ${props=>props.theme.text.subtitle};
  }
`