import styled from 'styled-components';
import { Tag as AntdTag } from "antd";
import {TagProps} from "antd/lib/tag"

interface ITagProps extends TagProps{
  status: string
}

export const Tag = styled(AntdTag)<ITagProps>`
  border: none;
  font: ${props=>props.theme.text.subtitle_small_bold};
  padding: 1px 17px;
  border-radius: 50px;
  width: 66px;
  height: 18px;
  &[status="active"]{
    background-color: #71E08310;
    color: #71E083;
    text-shadow: 0px 0px 8px #71E083;
  }
  &[status="error"]{
    background-color: #F2637210;
    color: #F26372;
    text-shadow: 0px 0px 8px #F26372;
  }
`;
