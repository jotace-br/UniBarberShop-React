import styled from "styled-components";
import { Form, Input as FormInput } from "antd";

export const FormItem = styled(Form.Item)`
  label {
    font: ${(props) => props.theme.text.subtitle_bold};
    color: ${(props) => props.theme.colors.black10};
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
