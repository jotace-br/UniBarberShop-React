import React, { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import { StyledModal } from "./style";
// import { Container } from './styles';
interface Props {
  visible: boolean;
  loading: boolean;
}

const Modal: React.FC<Props> = ({ loading, visible }) => {
  const [load, setLoading] = useState(loading);
  const [visi, setVisible] = useState(visible);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <StyledModal
      visible={visi}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <ButtonSecondary key="back" onClick={handleCancel}>
          Return
        </ButtonSecondary>,
        <ButtonPrimary key="submit" loading={load} onClick={handleOk}>
          Submit
        </ButtonPrimary>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </StyledModal>
  );
};

export default Modal;
