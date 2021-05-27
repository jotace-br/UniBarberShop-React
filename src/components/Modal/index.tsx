import React from 'react'

import { ContainerButtons, Illustration, StyledModal } from './style'
import { ButtonPrimary, ButtonSecondary } from 'components/Button'

import CheckIllustration from 'assets/modal_illustrations/check_modal.svg'
import FormIllustration from 'assets/modal_illustrations/form_modal.svg'
import QuestionIllustration from 'assets/modal_illustrations/question_modal.svg'
import WarningIllustration from 'assets/modal_illustrations/warning_modal.svg'
interface Props {
  type: string
  title: string
  visible: boolean
  loading: boolean
  onOkClick?: (e: any) => void
  onCancel?: (e: any) => void
  singleButton?: boolean
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
  type,
  title,
  visible,
  loading,
  onOkClick,
  onCancel,
  singleButton,
  children,
}) => {
  const handleOk = () => {
    loading = true
    setTimeout(() => {
      loading = false
      visible = false
    }, 500)
  }

  const handleCancel = () => {
    visible = false
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
      visible={visible}
      title={[
        <>
          {getImage() && <Illustration src={getImage()} alt="img" />}
          <p>{title}</p>
        </>,
      ]}
      onOk={onOkClick || handleOk}
      onCancel={onCancel || handleCancel}
      footer={
        singleButton
          ? [
              <ContainerButtons>
                <ButtonPrimary
                  key="submit"
                  loading={loading}
                  onClick={onOkClick || handleOk}
                >
                  Ok
                </ButtonPrimary>
              </ContainerButtons>,
            ]
          : [
              <ButtonPrimary
                key="submit"
                loading={loading}
                onClick={onOkClick || handleOk}
              >
                Confimar
              </ButtonPrimary>,
              <ButtonSecondary key="back" onClick={onCancel || handleCancel}>
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
