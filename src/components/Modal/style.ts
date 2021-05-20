import { Modal as AntdModal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(AntdModal)`
  .ant-modal-content {
    width: 550px;
    background-color: ${(props) => props.theme.colors.black100};
    padding: 32px;
    border-radius: 20px;
    .ant-modal-close-x {
      color: ${(props) => props.theme.colors.black30};
    }
    .ant-modal-header {
      border-bottom: 1px solid ${(props) => props.theme.colors.black70};

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
      padding: 30px 22px;
      text-align: center;
      font: ${(props) => props.theme.text.text_medium};
      color: ${(props) => props.theme.colors.black20};
    }
    .ant-modal-footer {
      border-top: none;
      display: flex;
      justify-content: center;
      button {
        margin: 0 12px;
      }
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
