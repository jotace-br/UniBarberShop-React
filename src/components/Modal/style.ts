import { Modal as AntdModal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(AntdModal)`
  .ant-modal-content {
    background-color: ${(props) => props.theme.colors.black100};
    .ant-modal-close-x {
      color: ${(props) => props.theme.colors.black30};
    }
    .ant-modal-header {
      border-bottom: 1px solid ${(props) => props.theme.colors.black70};
      margin: 0 32px;
      .ant-modal-title {
        color: #fff;
        font: ${(props) => props.theme.text.text_large_bold};
        text-align: center;
        P {
          margin-top: 32px;
        }
      }
      background-color: ${(props) => props.theme.colors.black100};
    }
    .ant-modal-body {
      padding: 24px 32px;
      font: ${(props) => props.theme.text.text_medium};
    }
    .ant-modal-footer {
      border-top: none;
    }
  }
`;
export const Illustration = styled.img`
  width: 164px;
  height: 164px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
  }
`;
