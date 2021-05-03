import styled from "styled-components";
import { Select } from "antd";

const { Option } = Select

export const StyledSelect = styled(Select)`
  & > .ant-select-selector {
    min-width: 81px;
    width: 191px;
    height: 36px !important;
    font: ${(props) => props.theme.text.subtitle};
    color: ${(props) => props.theme.colors.black10} !important;
    background-color: ${(props) => props.theme.colors.black70} !important;
    border-radius: 6px !important;
    border: none !important;
    align-items: center;
  }
  & > .ant-select-selector::placeholder {
    color: ${(props) => props.theme.colors.black30} !important;
  }
  &>.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
      box-shadow: none !important;
      border: 1px solid ${(props) => props.theme.colors.black10} !important;
  }
  .ant-select-arrow {
    color: ${(props) => props.theme.colors.black30} !important;
  }
  
  .ant-select-item.ant-select-item-option.ant-select-item-option-active{
    background-color: ${(props) => props.theme.colors.black60} !important;
  }
`;
export default StyledSelect;

export const StyledOption = styled(Option)`
  
`