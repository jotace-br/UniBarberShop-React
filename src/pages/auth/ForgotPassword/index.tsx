import React, { useState } from 'react'

import api from 'services/api'
import { PushHistory } from 'routes/history'

import { Form } from 'antd'

import { FormItem, Input } from 'components/Input'
import {
  AuthButton,
  Background,
  Container,
  ContainerForm,
  FormAuth,
  Heading,
  HeadingForm,
  Illustration,
  InfoFooter,
  Logo,
} from '../style'

import Modal from 'components/Modal'
import { errorNotification } from 'components/Notification'

import IllustrationForgot from 'assets/forgot.svg'

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)

  const handleOk = () => {
    setModalLoading(true)

    setTimeout(() => {
      setModalVisibility(false)
      setModalLoading(false)

      PushHistory('/login')
    }, 500)
  }

  const onFinish = async (body: object) => {
    try {
      await api.post('/forgot-password', body)
      setModalVisibility(true)
    } catch (err) {
      errorNotification(err.response.data.message)
    }
  }

  return (
    <Container>
      <Background>
        <Heading>
          <p>ESQUECEU SEUS DADOS DE ACESSO?</p>
          <p>Recupere sua senha</p>
        </Heading>
        <Illustration src={IllustrationForgot} />
      </Background>
      <FormAuth>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Recuperação de senha</p>
            <p>
              Nos informe seu e-mail cadastrado em nossa plataforma e enviaremos
              um link com o passo a passo para redefinir sua senha.
            </p>
          </HeadingForm>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <FormItem
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'O E-mail digitado não é um e-mail válido.',
                },
                {
                  required: true,
                  message: 'Por favor, insira seu E-mail.',
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Digite seu email de acesso..."
                maxLength={100}
              />
            </FormItem>
            <FormItem>
              <AuthButton htmlType="submit">Enviar</AuthButton>
            </FormItem>
          </Form>
        </ContainerForm>
        <InfoFooter>
          <p>Pxpay © 2021 by XGrow - Todos os Direitos Reservados</p>
        </InfoFooter>
      </FormAuth>

      <Modal
        title="Solicitação enviada!"
        visible={modalVisibility}
        loading={modalLoading}
        type="success"
        singleButton={true}
        onOkClick={handleOk}
      >
        Você vai receber um um link para redefinição de senha em seu e-mail.
      </Modal>
    </Container>
  )
}

export default ForgotPassword
