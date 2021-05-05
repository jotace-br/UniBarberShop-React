import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin-bottom: 26px;
  background: ${props => props.theme.colors.black100};
  padding: 30px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, .25); 
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(0, 0, 0, .65);
    filter: blur(10px);
    margin: -20px;
  }
`
export const CardTitle = styled.p`
  font: ${props => props.theme.text.text_large_bold};
  color: ${props => props.theme.colors.black10};
`
export const CardSubTitle = styled.p`
  margin-top: 6px;
  font: ${props => props.theme.text.text_medium};
  color: ${props => props.theme.colors.black20};
`
export const CardHeader = styled.div`
  margin-top: 6px;
  font: ${props => props.theme.text.text_medium};
  color: ${props => props.theme.colors.black20};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CardContent = styled.div`
  padding: 16px 0;
  
`
export const ActionsBtn = styled.button`
  padding: 6px;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`