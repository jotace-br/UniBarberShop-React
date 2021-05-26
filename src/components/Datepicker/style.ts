import styled from 'styled-components'

import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

export const StyledDatepicker = styled(DatePicker)`
  width: 191px;
  height: 36px;
  background-color: ${props => props.theme.colors.black70};
  border-radius: 6px;
  border: none;
  & > .ant-picker-input > input::placeholder {
    color: ${props => props.theme.colors.black10} !important;
    opacity: 1;
  }
  .ant-picker-suffix {
    color: ${props => props.theme.colors.black10} !important;
  }
  & > .ant-picker-input > input {
    color: ${props => props.theme.colors.black10} !important;
  }
  .ant-picker-clear {
    background-color: ${props => props.theme.colors.black70};
    color: ${props => props.theme.colors.black10} !important;
  }
`
export const StyledRangePicker = styled(RangePicker)`
  width: 191px;
  height: 36px;
  font: ${props => props.theme.text.subtitle};
  background-color: ${props => props.theme.colors.black70};
  border-radius: 6px;
  border: none;
  & > .ant-picker-input > input::placeholder {
    color: ${props => props.theme.colors.black10} !important;
    opacity: 1;
  }
  .ant-picker-suffix {
    color: ${props => props.theme.colors.black10} !important;
  }
  & > .ant-picker-input > input {
    color: ${props => props.theme.colors.black10} !important;
  }
  .ant-picker-clear {
    background-color: ${props => props.theme.colors.black70};
    color: ${props => props.theme.colors.black10} !important;
  }
  .ant-picker .ant-picker-range {
    &:last-of-type(.ant-input > input) {
      margin-left: -4px;
    }
  }
  .ant-picker-range-separator {
    margin-left: -16px;
    color: #fff;
  }
  .ant-picker-active-bar {
    display: none;
  }
`
