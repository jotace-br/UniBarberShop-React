import styled from 'styled-components';

export const Link = styled.a`
  font: ${props=>props.theme.text.subtitle_bold};
  color: ${props=>props.theme.colors.primary90};
  :hover{
    color: ${props=>props.theme.colors.primary70};
  }
`;
