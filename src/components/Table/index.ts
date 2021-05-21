import { Button, Dropdown, Menu, Table as AntdTable } from 'antd'
import styled from 'styled-components'

export const Table = styled(AntdTable)`
  .ant-table-thead > tr > th {
    background-color: ${props => props.theme.colors.black80};
    color: ${props => props.theme.colors.white};
    font: ${props => props.theme.text.subtitle_small_bold};
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
      border: 1px solid ${props => props.theme.colors.black10};
      border-radius: 3px;
    }
    .ant-checkbox-wrapper-checked
      > .ant-checkbox-checked
      > .ant-checkbox-inner {
      background-color: ${props => props.theme.colors.primary100};
      border: none;
      border-radius: 3px;
    }
    .ant-checkbox-wrapper
      > .ant-checkbox-indeterminate
      > .ant-checkbox-inner::after {
      background-color: ${props => props.theme.colors.primary100};
    }
  }
  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background-color: unset;
  }
  .ant-table-tbody > tr > td {
    border-bottom: 0;
    color: #fff;
    font: ${props => props.theme.text.subtitle};
  }
  .ant-table-tbody > tr > td > a {
    color: #fff;
  }
  .ant-table-tbody > tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.black90};
  }
  .ant-table-tbody > tr:nth-child(even) {
    background-color: ${props => props.theme.colors.black70};
  }
  .ant-pagination {
    margin: 0;
    padding: 16px 30px;
    background-color: rgba(34, 34, 34, 0.7);
    border-radius: 0 0 5px 5px;
  }
  .ant-pagination .ant-pagination-prev,
  .ant-pagination .ant-pagination-next {
    background-color: ${props => props.theme.colors.black90};
    border: 0;
    color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 15px #00000025;
    padding: 4px 7px;
    border-radius: 5px;
    padding: 0;
    button {
      background-color: transparent;
      border: none;
      padding: 0;
      color: #fff;
    }
  }
  .ant-pagination-item {
    background-color: transparent;
    border: 0;
    color: ${props => props.theme.colors.white};
    padding: 4px 7px;
    border-radius: 5px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
      font: ${props => props.theme.text.subtitle};
    }
  }
  .ant-pagination-item.ant-pagination-item-active {
    background-color: ${props => props.theme.colors.primary100};
    box-shadow: 0 4px 10px rgba(230, 194, 39, 0.25);
    a {
      font: ${props => props.theme.text.subtitle_bold};
    }
  }
  .ant-pagination-total-text {
    margin-right: auto;
    div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    div > p {
      color: ${props => props.theme.colors.black30} !important;
      font: ${props => props.theme.text.subtitle_small};
    }
    div > p > span {
      font: ${props => props.theme.text.subtitle_small_bold};
    }
  }
`

export default Table

interface TableButtonProps {
  variant: string
}
export const TableDropdownButton = styled(Dropdown)`
  width: 26px;
  height: 26px;
  background-color: ${props => props.theme.colors.black90};
  border: 0;
  color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 15px #00000025;
  padding: 7px 10px;
  border-radius: 5px;
  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black70};
    box-shadow: none;
  }
`
export const TableButton = styled(Button)<TableButtonProps>`
  width: 26px;
  height: 26px;
  background-color: ${props => props.theme.colors.black90};
  border: 0;
  color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 15px #00000025;
  padding: 7px 10px;
  border-radius: 5px;
  &[variant='trash'],
  &[variant='trash']:hover,
  &[variant='trash']:active,
  &[variant='trash']:focus {
    color: #ff7070;
    box-shadow: none;
  }
  :hover,
  :active,
  :focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black70};
    box-shadow: none;
  }
`
export const TableAddForm = styled.div`
  background-color: ${props => props.theme.colors.black80};

  .ant-form {
    display: flex;
    align-items: flex-end;
    padding: 20px 0;
    border-top: 1px solid ${props => props.theme.colors.black60};
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    z-index: 1;
    position: relative;
    border-radius: 0px 0px 15px 15px;
    .ant-row {
      margin: 0 20px;
      :last-child {
        margin-bottom: 0;
      }
    }
  }
`
// export const ButtonDropdown = styled(Dropdown.Button)`
//   .ant-btn.ant-btn-default {
//     background-color: #e6be27;
//     color: #fff8dc;
//     -webkit-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
//     -moz-box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
//     box-shadow: 0px 4px 15px 0px rgba(252, 215, 74, 0.25);
//     :hover,
//     :active,
//     :focus {
//       background-color: #edd168;
//       color: #fff8dc;
//     }
//     height: 36px;

//     font-weight: 700;
//     font-size: 12px;
//     text-shadow: none;
//     border: none;
//     &[disabled] {
//       background-color: #777777;
//       :hover {
//         background-color: #777777;
//       }
//     }
//   }
//   .ant-btn:first-child:not(:last-child),
//   span:first-child:not(:last-child) > .ant-btn {
//     border-top-left-radius: 6px !important;
//     border-bottom-left-radius: 6px !important;
//   }
//   .ant-btn:last-child:not(:first-child),
//   span:last-child:not(:first-child) > .ant-btn {
//     border-top-right-radius: 6px !important;
//     border-bottom-right-radius: 6px !important;
//   }
// `;
export const MenuDropdown = styled(Menu)`
  background-color: ${props => props.theme.colors.black70};
  width: 248px;
  color: ${props => props.theme.colors.black20};
  border-radius: 6px;
  padding: 10px 0;
  .ant-dropdown-menu-item.ant-dropdown-menu-item-only-child {
    a,
    p {
      color: ${props => props.theme.colors.black20};
      font: ${props => props.theme.text.subtitle};
    }
    :hover {
      background-color: ${props => props.theme.colors.black60};
    }
  }
`
