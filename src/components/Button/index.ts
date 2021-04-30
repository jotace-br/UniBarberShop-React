import { Button } from 'antd';
import styled from 'styled-components';

export const ExtendButton = styled(Button)`
  width: 136px;
  height: 36px;
  border-radius: 6px;      
  font-weight: 700;
  font-size: 12px;
  text-shadow: none;
  border: none;
  &[disabled]{
    background-color: #777777;
    :hover{
      background-color: #777777;
    }
  }
`
export default ExtendButton;

export const ButtonPrimary = styled(ExtendButton)`
  background-color: #E6BE27;
  color: #FFF;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(252,215,74,0.25);
  -moz-box-shadow: 0px 4px 15px 0px rgba(252,215,74,0.25);
  box-shadow: 0px 4px 15px 0px rgba(252,215,74,0.25);
  :hover{
    background-color: #EDD168;
    color: #FFF;
  }
`
export const ButtonOutline = styled(ExtendButton)`
  background-color: transparent;
  color: #FFF;
  border: 1.5px solid #4A4A4A;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  :hover{
    border: 1.5px solid #A4A4A4;
    background-color: transparent;
    color: #FFF;
  }
`
export const ButtonSecondary = styled(ExtendButton)`
  background-color: #4A4A4A;
  color: #fff;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.15);
  :hover{
    background-color: #777777;
    color: #fff;
  }
`