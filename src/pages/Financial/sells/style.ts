import styled from "styled-components";

interface Props {
  color: string;
}
export const TwoCardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2%;
`;
export const StatusList = styled.ul`
  list-style: none;
`;
export const StatusListItem = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    color: ${(props) => props.color};
    width: 36px;
    height: 36px;
    padding: 12px;
    background-color: ${(props) => props.color.concat("10")};
    border-radius: 50%;
    -webkit-filter: drop-shadow(0px 0px 2px ${(props) => props.color});
    filter: drop-shadow(0px 0px 2px ${(props) => props.color});
  }
`;
export const StatusValue = styled.div<Props>`
  display: flex;
  align-items: center;
  svg {
    color: ${(props) => props.color};
    width: 36px;
    height: 36px;
    padding: 12px;
    background-color: ${(props) => props.color.concat("10")};
    border-radius: 50%;
    -webkit-filter: drop-shadow(0px 0px 2px ${(props) => props.color});
    filter: drop-shadow(0px 0px 2px ${(props) => props.color});
  }
  P {
    font: ${(props) => props.theme.text.text_small_bold};
    color: ${(props) => props.theme.colors.white};
  }
`;
export const StatusLabel = styled.div`
  display: flex;
  align-items: center;
`;
