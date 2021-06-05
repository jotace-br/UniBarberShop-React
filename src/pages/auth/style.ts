import styled from 'styled-components'

import barberShopWP from 'assets/wallpaper1.jpg'
import barberShopWP3 from 'assets/wallpaper3.jpg'

import { ButtonPrimary } from 'components/Button'

export const Container = styled.div`
  background: url(${barberShopWP}) no-repeat fixed center;
  background-size: cover;
  background-blend-mode: saturation;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh + 80px);
  }
`

export const ContainerRegister = styled.div`
  background: url(${barberShopWP3}) no-repeat fixed center;
  background-size: cover;
  background-blend-mode: saturation;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const Background = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: auto;
    transform: translate(0, 50%);
  }
`

export const BackgroundRegister = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.div`
  text-align: center;
  /* position: fixed; */
  /* top: 40px;
  width: 100vw; */

  @media screen and (max-width: 1024px) {
    margin-top: 25px;
    margin-bottom: -220px;
  }

  p:first-child {
    font: 300 22px/160% 'Poppins', sans-serif;
    letter-spacing: 3px;
    background: -webkit-linear-gradient(#ffc107, #fff48c);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p:last-child {
    font: 500 18px/160% 'Poppins', sans-serif;
    color: ${props => props.theme.colors.white} !important;
  }
`

export const FormAuth = styled.div`
  /* position: absolute; */
  overflow-y: auto;
  left: 50;
  /* top: 20%; */
  /* bottom: 80; */
  /* transform: translate(50%, 50%); */
  /* background-color: ${props => props.theme.colors.black100}; */
  box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    width: 100%;
  }
`

export const FormRegister = styled.div`
  /* position: absolute; */
  overflow-y: auto;
  margin: 4em;
  left: 50;
  /* top: 20%; */
  /* bottom: 80; */
  /* transform: translate(50%, 50%); */
  /* background-color: ${props => props.theme.colors.black100}; */
  box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    width: 100%;
  }
`

export const AuthButton = styled(ButtonPrimary)`
  width: 100%;
`

export const SubButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`

export const ContainerForm = styled.div`
  width: 450px;
  .ant-form
    .ant-form-item.ant-form-item-has-feedback.ant-form-item-has-error
    .ant-form-item-control
    .ant-form-item-control-input
    .ant-form-item-control-input-content
    input,
  .ant-form
    .ant-form-item.ant-form-item-has-feedback.ant-form-item-has-error
    .ant-form-item-control
    .ant-form-item-control-input
    .ant-form-item-control-input-content
    .ant-input-affix-wrapper {
    background-color: ${props => props.theme.colors.black70};
  }
`
export const Logo = styled.img`
  margin: 45px 0;
  width: 100%;
  object-fit: cover;
`

export const HeadingForm = styled.div`
  margin-bottom: 40px;
  p:first-child {
    font: ${props => props.theme.text.h5};
    color: ${props => props.theme.colors.black10} !important;
  }
  p:last-child {
    font: ${props => props.theme.text.text_medium};
    color: ${props => props.theme.colors.black10} !important;
  }
`

export const RedirectLabel = styled.p`
  margin-top: 2.5rem;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.black10} !important;
  font: ${props => props.theme.text.text_small};
  a {
    font: ${props => props.theme.text.text_small_bold};
  }
`
export const InfoFooter = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-top: 12px;
  p {
    color: ${props => props.theme.colors.black30} !important;
  }
`
export const Link = styled.a`
  font: ${props => props.theme.text.subtitle_bold};
  color: ${props => props.theme.colors.primary90};
  :hover {
    color: ${props => props.theme.colors.primary70};
  }
`
