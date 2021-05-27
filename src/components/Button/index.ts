import { Button, Dropdown, Menu } from 'antd'
import styled from 'styled-components'

export const ExtendButton = styled(Button)`
  width: 136px;
  height: 36px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 12px;
  text-shadow: none;
  border: none;
  &[disabled] {
    background-color: #777777;
    :hover {
      background-color: #777777;
    }
  }
`
export default ExtendButton

export const ButtonPrimary = styled(ExtendButton)`
  background-color: #e6be27;
  color: #fff8dc;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  -moz-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  :hover,
  :active,
  :focus {
    background-color: #edd168;
    color: #fff8dc;
  }
`
export const ButtonOutline = styled(ExtendButton)`
  background-color: transparent;
  color: ${props => props.theme.colors.black10};
  border: 1.5px solid #4a4a4a;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  :hover,
  :active,
  :focus {
    border: 1.5px solid #a4a4a4;
    background-color: transparent;
    color: ${props => props.theme.colors.black10};
  }
`
export const ButtonSecondary = styled(ExtendButton)`
  background-color: #4a4a4a;
  color: ${props => props.theme.colors.black10};
  -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  :hover,
  :active,
  :focus {
    background-color: #777777;
    color: ${props => props.theme.colors.black10};
  }
`

export const ButtonForIcons = styled(ExtendButton)`
  width: fit-content;
  background-color: #e6be27;
  color: #fff8dc;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  -moz-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
  :hover,
  :active,
  :focus {
    background-color: #edd168;
    color: #fff8dc;
  }
`

export const ButtonDropdown = styled(Dropdown.Button)`
  .ant-btn.ant-btn-default {
    background-color: #e6be27;
    color: #fff8dc;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
    -moz-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
    box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
    :hover,
    :active,
    :focus {
      background-color: #edd168;
      color: #fff8dc;
    }
    height: 36px;

    font-weight: 700;
    font-size: 12px;
    text-shadow: none;
    border: none;
    &[disabled] {
      background-color: #777777;
      :hover {
        background-color: #777777;
      }
    }
  }
  .ant-btn:first-child:not(:last-child),
  span:first-child:not(:last-child) > .ant-btn {
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
  }
  .ant-btn:last-child:not(:first-child),
  span:last-child:not(:first-child) > .ant-btn {
    border-top-right-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
  }
`
export const MenuDropdown = styled(Menu)`
  background-color: ${props => props.theme.colors.primary70};
  width: 152px;
  top: -9px;
  .ant-dropdown-menu-item.ant-dropdown-menu-item-only-child {
    border-bottom: 1px solid ${props => props.theme.colors.primary60};
    color: ${props => props.theme.colors.black60};
    font: ${props => props.theme.text.subtitle_small};
    :hover {
      background-color: ${props => props.theme.colors.primary50};
    }
  }
`
