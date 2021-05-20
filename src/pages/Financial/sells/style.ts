import styled from "styled-components";

interface Props {
  color: string;
}
export const TwoCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 1%;
`;
export const StatusList = styled.ul`
  list-style: none;
`;
export const StatusListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.black60};
  padding: 16px 0;
  :last-child {
    border-bottom: none;
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
    border-radius: 50%;
    -webkit-filter: drop-shadow(0px 0px 8px ${(props) => props.color});
    filter: drop-shadow(0px 0px 8px ${(props) => props.color});
  }
  P {
    font: ${(props) => props.theme.text.text_small_bold};
    color: ${(props) => props.theme.colors.white};
  }
`;
export const StatusLabel = styled.div<Props>`
  display: flex;
  align-items: center;
  svg {
    color: ${(props) => props.color};
    width: 36px;
    height: 36px;
    padding: 10px;
    margin-right: 16px;
    background-color: ${(props) => props.color.concat("10")};
    border-radius: 50%;
    -webkit-filter: drop-shadow(0px 0px 2px ${(props) => props.color});
    filter: drop-shadow(0px 0px 2px ${(props) => props.color});
  }
`;
