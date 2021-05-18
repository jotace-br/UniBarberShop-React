import styled from "styled-components";
import { ReactComponent as PxPayLogo } from "../../assets/logo_principal.svg";
import { ButtonPrimary } from "../../components/Button";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${(props) => props.theme.colors.black100};
`;

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.black100};
  min-height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Illustration = styled.img`
  height: 100vh;
  position: sticky;
  width: 100%;
  top: 0;
  /* object-fit: cover; */
`;
export const Heading = styled.div`
  text-align: center;
  position: fixed;
  top: 40px;
  z-index: 999;
  width: 610px;
  p:nth-child(1) {
    font: 300 22px/160% "Poppins", sans-serif;
    letter-spacing: 3px;
    background: -webkit-linear-gradient(#ffc107, #fff48c);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p:nth-child(2) {
    font: 700 48px/160% "Poppins", sans-serif;
  }
  p:nth-child(3) {
    font: 500 18px/160% "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.white} !important;
  }
`;

export const FormAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black100};
  min-height: 100vh;
  width: 40vw;
  box-shadow: 0px 0px 250px 0px rgba(0, 0, 0, 0.5);
  border-left: 8px solid ${(props) => props.theme.colors.black90};
`;

export const AuthButton = styled(ButtonPrimary)`
  width: 100%;
`;

export const SubButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;
export const ContainerForm = styled.div`
  width: 460px;
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
    background-color: ${(props) => props.theme.colors.black70};
  }
`;
export const Logo = styled(PxPayLogo)`
  margin: 60px 0;
  width: 100%;
  height: 64px;
`;
export const HeadingForm = styled.div`
  margin-bottom: 40px;
  p:first-child {
    font: ${(props) => props.theme.text.h5};
    color: ${(props) => props.theme.colors.black10} !important;
  }
  p:last-child {
    font: ${(props) => props.theme.text.text_medium};
    color: ${(props) => props.theme.colors.black30} !important;
  }
`;
export const DividerOr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 0;
  hr {
    width: 211px;
    color: ${(props) => props.theme.colors.black60} !important;
    background-color: ${(props) => props.theme.colors.black60} !important;
    border-color: ${(props) => props.theme.colors.black60} !important;
  }
  p {
    color: ${(props) => props.theme.colors.black40} !important;
    font: ${(props) => props.theme.text.subtitle};
  }
`;
export const RedirectLabel = styled.p`
  margin-top: 80px;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.black10} !important;
  font: ${(props) => props.theme.text.text_small};
  a {
    font: ${(props) => props.theme.text.text_small_bold};
  }
`;
export const ContainerSocial = styled.div`
  p {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.black30} !important;
    font: ${(props) => props.theme.text.subtitle};
  }
`;
export const DividerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 0;
  hr {
    width: 211px;
    color: ${(props) => props.theme.colors.black60} !important;
    background-color: ${(props) => props.theme.colors.black60} !important;
    border-color: ${(props) => props.theme.colors.black60} !important;
  }
  p {
    color: ${(props) => props.theme.colors.black40} !important;
    font: ${(props) => props.theme.text.subtitle};
    margin-right: 5px;
    width: 161px;
    text-align: center;
  }
  svg {
    color: ${(props) => props.theme.colors.black30} !important;
    margin: 0 5px;
    font-size: 28px;
  }
`;
export const Divider = styled.hr`
  width: 100%;
  margin: 40px 0;
  color: ${(props) => props.theme.colors.black60} !important;
  background-color: ${(props) => props.theme.colors.black60} !important;
  border-color: ${(props) => props.theme.colors.black60} !important;
`;
export const InfoFooter = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-top: 12px;
  p {
    color: ${(props) => props.theme.colors.black30} !important;
  }
`;
export const WrapperRecaptcha = styled.div`
  display: flex;
  justify-content: center;
`;
