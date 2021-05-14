import styled from "styled-components";

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
  background-color: ${(props) => props.theme.colors.black90};
  color: #fff;
  svg {
    width: 19px;
    height: 12px;
    ${(props) => props.theme.colors.black10}
  }
  :hover {
    background-color: #777777;
    color: #fff;
  }
`;
