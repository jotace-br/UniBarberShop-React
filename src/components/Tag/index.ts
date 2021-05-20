import styled from 'styled-components';
import { Tag as AntdTag } from 'antd';
import { TagProps } from 'antd/lib/tag';

interface ITagProps extends TagProps {
  status: string;
}

export const Tag = styled(AntdTag)<ITagProps>`
  border: none;
  font: ${(props) => props.theme.text.subtitle_small_bold};
  padding: 1px 17px;
  border-radius: 50px;
  width: fit-content;
  height: 18px;
  &[status='active'] {
    background-color: #71e08310;
    color: #71e083;
    text-shadow: 0px 0px 8px #71e083;
  }
  &[status='waiting'] {
    background-color: rgba(164, 164, 164, 0.1);
    color: #a4a4a4;
  }
  &[status='refunded'] {
    background-color: rgba(164, 164, 164, 0.1);
    color: #a4a4a4;
  }
  &[status='error'] {
    background-color: #f2637210;
    color: #f26372;
    text-shadow: 0px 0px 8px #f26372;
  }
`;
