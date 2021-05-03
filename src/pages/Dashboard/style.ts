import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 244px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
    font: ${props => props.theme.text.subtitle_bold}
  }
`;

export const ExportContainer = styled.div`
  width: 194px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font: ${props => props.theme.text.subtitle_bold}
  }
`;

export const TwoCardContainer = styled.div`
  display: flex;
  div:first-child{
    margin-right: 22px;
  }
`;
