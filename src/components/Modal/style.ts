import { Modal as AntdModal } from "antd";
import styled from "styled-components";
export const StyledModal = styled(AntdModal)`
  .ant-modal-header {
    border-bottom: none;
    .ant-modal-title {
      color: #fff;
      font: ${(props) => props.theme.text.text_large_bold};
    }
    background-color: ${(props) => props.theme.colors.black100};
  }
  .ant-modal-content {
    .ant-modal-close-x {
      color: ${(props) => props.theme.colors.black30};
    }
    background-color: ${(props) => props.theme.colors.black100};
  }
  .ant-modal-footer {
    border-bottom: none;
  }
`;
