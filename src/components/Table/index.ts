import styled from "styled-components";
import { Button, Table as AntdTable } from "antd";

export const Table = styled(AntdTable)`
  .ant-table-thead > tr > th {
    background-color: ${(props) => props.theme.colors.black80};
    color: ${(props) => props.theme.colors.white};
    font: ${(props) => props.theme.text.subtitle_small_bold};
    text-transform: uppercase;
    border-bottom: 0;
  }
  .ant-table-container table > thead > tr:first-child th:first-child,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  table tr th.ant-table-selection-column,
  table tr td.ant-table-selection-column {
    padding-left: 30px;
    .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.black10};
      border-radius: 3px;
    }
    .ant-checkbox-wrapper-checked
      > .ant-checkbox-checked
      > .ant-checkbox-inner {
      background-color: ${(props) => props.theme.colors.primary100};
      border: none;
      border-radius: 3px;
    }
    .ant-checkbox-wrapper
      > .ant-checkbox-indeterminate
      > .ant-checkbox-inner::after {
      background-color: ${(props) => props.theme.colors.primary100};
    }
  }
  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr.ant-table-row-selected > td{
    background-color: unset;
  }
  .ant-table-tbody > tr > td{
    border-bottom: 0;
    color: #fff;
    font: ${(props) => props.theme.text.subtitle};
  }
  .ant-table-tbody > tr > td>a{
    color: #fff
  }
  .ant-table-tbody > tr:nth-child(odd){
    background-color: ${(props) => props.theme.colors.black90};
  }
  .ant-table-tbody > tr:nth-child(even){
    background-color: ${(props) => props.theme.colors.black70};
  }
  .ant-pagination{
    margin: 0;
    padding: 16px 30px;
    background-color: rgba(34,34,34,.70);
    border-radius: 0 0 5px 5px;
  }
  .ant-pagination .ant-pagination-prev{
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.theme.colors.black90};
    border: 0;
    color:  ${(props) => props.theme.colors.white};
    box-shadow: 0 4px 15px #00000025;
    padding: 4px 7px;
    border-radius: 5px;
    padding: 0;
    button{
      background-color: transparent;
      border: none;
      padding: 0;
      color: #fff
    }
  }
  .ant-pagination-item{
    
  } 
  

`;

export default Table;


interface TableButtonProps{
  a: string
}
export const TableButton = styled(Button)<TableButtonProps>`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.black90};
  border: 0;
  color:  ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 15px #00000025;
  padding: 4px 7px;
  border-radius: 5px;
  &[a="trash"],
  &[a="trash"]:hover{
    color: #FF7070; 
  }
  :hover{
    color:  ${(props) => props.theme.colors.white}; 
    background-color: ${(props) => props.theme.colors.black70};
  }
  
`;
