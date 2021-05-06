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
export const SmallCard = styled.div`
  width: 320px;
  height: 108px;
  background-color: ${props=>props.theme.colors.black100};
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 5px 30px 0px rgba(0,0,0,.15);
  margin-left: 26px;
`
export const CardIcon = styled.div`
  flex-shrink: 0;
  margin-left: 12px;
  width: 62px;
  height: 62px;
  background-color: transparent;
  border: 3px solid ${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px ${props=>props.color};
  box-shadow: inset  0px 0px 10px 0px ${props=>props.color}, 0px 0px 10px 0px ${props=>props.color};
  margin-right: 25px;
  svg{
    width: 31px;
    height: 31px;
    color: ${props=>props.color};
  }
`
export const SmallCardText = styled.div`
  width: 111px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 70px;
  p:first-child{
    font: ${props=>props.theme.text.text_large_bold}
  }
  p:last-child{
    font: ${props=>props.theme.text.subtitle}
  }
`
export const SmallCardAction = styled.button`
  flex-shrink: 0;
  margin-right: 12px; 
  width: 26px;
  height: 26px;
  border-radius: 6px;      
  font-weight: 700;
  font-size: 12px;
  text-shadow: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.theme.colors.black90};
  color: #fff;
  svg{
    width: 19px;
    height: 12px;
    ${props=>props.theme.colors.black10}
  }
  :hover{
    background-color: #777777;
    color: #fff;
  }
`

export const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  overflow-x: auto;
  padding-bottom: 12px;
  /* Works on Chrome/Edge/Safari */
  ::-webkit-scrollbar {
    width: 7px;  
    height: 7px;             /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,.25);        /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props=>props.theme.colors.primary100};    /* color of the scroll thumb */
    border-radius: 40px;       /* roundness of the scroll thumb */
    border: 1px solid rgba(0,0,0,.25);  /* creates padding around scroll thumb */
  }
` 