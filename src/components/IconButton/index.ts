import { Button } from 'antd'
import styled from 'styled-components'

export const IconButton = styled(Button)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 0 !important;
  margin: 0 10px !important;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  border: 0;
  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #ffffff82;
  }
`
export const RedirectButton = styled.a`
  padding: 0 !important;
  margin: 0 10px !important;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  border: 0;
  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #ffffff82;
  }
`
