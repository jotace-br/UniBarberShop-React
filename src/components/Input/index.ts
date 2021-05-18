import { Form, Input as FormInput } from "antd";
import styled from "styled-components";

export const FormItem = styled(Form.Item)`
  label {
    font: ${(props) => props.theme.text.subtitle_bold};
    color: ${(props) => props.theme.colors.black10};
  }
  .ant-form-item-has-error .ant-input {
    background-color: ${(props) => props.theme.colors.black70};
  }
`;

export const Input = styled(FormInput)`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.black70};
  border: none;
  color: ${(props) => props.theme.colors.black10};
  ::placeholder {
    color: ${(props) => props.theme.colors.black30};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.black70}
      inset;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.black10} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const PasswordInput = styled(FormInput.Password)`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.black70};
  border: none;
  color: ${(props) => props.theme.colors.black10};
  input {
    background-color: ${(props) => props.theme.colors.black70};
    color: ${(props) => props.theme.colors.black10};
  }
  .ant-input-suffix span svg {
    color: ${(props) => props.theme.colors.black10};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.black30};
  }
`;
