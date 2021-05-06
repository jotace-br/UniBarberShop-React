import styled from 'styled-components';
import { Checkbox } from 'antd';

export const StyledCheckbox = styled(Checkbox)`
  font: ${props=>props.theme.text.subtitle_bold};
  color: ${props=>props.theme.colors.black10};
  .ant-checkbox .ant-checkbox-inner{
    background-color: transparent;
    border: 1px solid ${props=>props.theme.colors.black10};
    border-radius: 3px;
  }
  .ant-checkbox-checked .ant-checkbox-inner{
    background-color: ${props=>props.theme.colors.primary100};
    border: none;
    border-radius: 3px;
  }
  .ant-checkbox-checked::after{
    border-color: ${props=>props.theme.colors.primary60} !important;
  }
`;
export default StyledCheckbox