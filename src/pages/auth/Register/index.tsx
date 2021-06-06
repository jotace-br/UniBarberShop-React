import React, { useState } from 'react'

import {
  AuthButton,
  BackgroundRegister,
  ContainerRegister,
  ContainerForm,
  FormRegister,
  HeadingForm,
  InfoFooter,
  RedirectLabel,
  Link,
} from '../style'

import { Form } from 'antd'
import { FormItem, Input, PasswordInput } from 'components/Input'
import MaskedInput from 'antd-mask-input'

import history from 'routes/history'
import api from 'services/api'

import { errorNotification } from 'components/Notification'

import Modal from 'components/Modal'

const Register: React.FC = () => {
  const [form] = Form.useForm()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)

  const handleOk = () => {
    setModalLoading(true)

    setTimeout(() => {
      setModalVisibility(false)
      setModalLoading(false)

      history.push('/login')
    }, 500)
  }

  const onFinish = async (body: object) => {
    try {
      await api.post('/api/auth/register', body)
      setModalVisibility(true)
    } catch (err) {
      errorNotification(
        err.response.data.message || 'Oops! aconteceu um erro.',
        'Por favor, tente novamente.',
      )
    }
  }

  return (
    <ContainerRegister>
      <BackgroundRegister>
        <FormRegister>
          <ContainerForm>
            <HeadingForm>
              <p>Crie uma conta</p>
              <p>Crie aqui seu cadastro para nossa plataforma.</p>
            </HeadingForm>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              scrollToFirstError
            >
              <FormItem
                name="name"
                label="Nome completo"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, insira seu nome completo.',
                  },
                  {
                    min: 3,
                    message: 'Seu nome deve ter, no mínimo, 3 caracteres.',
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Digite seu nome completo..."
                  maxLength={100}
                />
              </FormItem>
              <FormItem
                name="phone"
                label="Telefone"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, insira seu telefone.',
                  },
                ]}
                hasFeedback
              >
                <MaskedInput
                  mask="(11) 11111-1111"
                  maxLength={11}
                  placeholder="Digite seu número de telefone..."
                  style={{
                    width: '100%',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: '#2C2C2C',
                    border: 'none',
                    color: '#E8E8E8',
                  }}
                />
              </FormItem>
              <FormItem
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'O E-mail digitado não é um e-mail válido.',
                  },
                  {
                    required: true,
                    message: 'Por favor, digite seu e-mail.',
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Digite seu e-mail..." />
              </FormItem>
              <FormItem
                name="password"
                label="Senha"
                tooltip="Mínimo de 8 caracteres."
                rules={[
                  {
                    required: true,
                    message: 'Por favor, digite uma senha.',
                  },
                  {
                    min: 8,
                    message: 'Sua senha deve conter, no mínimo, 8 caracteres.',
                  },
                ]}
                hasFeedback
              >
                <PasswordInput
                  placeholder="Digite sua senha..."
                  maxLength={150}
                />
              </FormItem>
              <FormItem
                name="password_confirmation"
                label="Confirme sua senha"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Por favor, confirme sua senha.',
                  },
                  {
                    min: 8,
                    message: 'Sua senha deve conter, no mínimo, 8 caracteres.',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error('As duas senhas digitadas não conferem.'),
                      )
                    },
                  }),
                ]}
              >
                <PasswordInput
                  placeholder="Digite sua senha..."
                  maxLength={150}
                />
              </FormItem>
              <RedirectLabel>
                Ao se cadastrar, você concorda com os{' '}
                <Link
                  href="https://www.site.com.br/termos-de-utilizacao/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Termos de Uso
                </Link>{' '}
                da UniBarberShop.
              </RedirectLabel>
              <br />
              <AuthButton htmlType="submit">Cadastrar</AuthButton>
            </Form>
          </ContainerForm>
          <InfoFooter>
            <p>UniBarberShop © 2021 - Todos os Direitos Reservados</p>
          </InfoFooter>
        </FormRegister>
      </BackgroundRegister>

      <Modal
        title="Cadastro realizado!"
        visible={modalVisibility}
        loading={modalLoading}
        type="success"
        singleButton={true}
        onOkClick={handleOk}
      >
        Obrigado por se cadastrar em nossa plataforma! Agora basta fazer o login
        para entrar.
      </Modal>
    </ContainerRegister>
  )
}

export default Register
