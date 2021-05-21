import React, { useState } from 'react'

// import Title from "antd/lib/typography/Title";

import { ContainerButtons, Illustration, StyledModal } from './style'
import { ButtonPrimary, ButtonSecondary } from '../Button'

import CheckIllustration from '../../assets/modal_illustrations/check_modal.svg'
import FormIllustration from '../../assets/modal_illustrations/form_modal.svg'
import QuestionIllustration from '../../assets/modal_illustrations/question_modal.svg'
import WarningIllustration from '../../assets/modal_illustrations/warning_modal.svg'

// import { Container } from './styles';
interface Props {
  title: string
  visible: boolean
  loading: boolean
  type?: string
  singleButton?: boolean
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
  loading,
  visible,
  children,
  type,
  singleButton,
  title,
}) => {
  const [load, setLoading] = useState(loading)
  const [visi, setVisible] = useState(visible)

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const getImage = () => {
    switch (type) {
      case 'warning':
        return WarningIllustration
      case 'form':
        return FormIllustration
      case 'question':
        return QuestionIllustration
      case 'success':
        return CheckIllustration
      default:
        return undefined
    }
  }
  return (
    <StyledModal
      visible={visi}
      title={[
        <>
          {getImage() ? <Illustration src={getImage()} alt="img" /> : null}
          <p>{title}</p>
        </>,
      ]}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        singleButton
          ? [
              <ContainerButtons>
                <ButtonPrimary key="submit" loading={load} onClick={handleOk}>
                  Ok
                </ButtonPrimary>
              </ContainerButtons>,
            ]
          : [
              <ButtonPrimary key="submit" loading={load} onClick={handleOk}>
                Confimar
              </ButtonPrimary>,
              <ButtonSecondary key="back" onClick={handleCancel}>
                Cancelar
              </ButtonSecondary>,
            ]
      }
    >
      {children}
    </StyledModal>
  )
}

export default Modal
