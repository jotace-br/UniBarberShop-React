import styled from 'styled-components';
import { ButtonSecondary } from '../Button';

export const SocialBtn = styled(ButtonSecondary)`
  width: 460px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${props=>props.theme.text.text_small_bold};
  background-color: ${props=>props.theme.colors.black70};
  svg{
    margin-right: 16px;
  }
`;
