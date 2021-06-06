import React from 'react'

import {
  AuthButton,
  Background,
  Box,
  Container,
  ContainerForm,
  FormAuth,
  Heading,
  HeadingForm,
  InfoFooter,
  RedirectLabel,
} from '../style'

import { Form } from 'antd'
import { FormItem, Input, PasswordInput } from 'components/Input'

import api from 'services/api'
import { login } from 'services/login'

import { Link } from 'components/Link'

import { errorNotification } from 'components/Notification'

const Login: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = async (body: object) => {
    try {
      const { data } = await api.post('/api/auth/login', body)
      await login(data.access_token)
    } catch (err) {
      errorNotification(
        err.response.data.message,
        'Por favor, tente novamente.',
      )
    }
  }

  return (
    <Container>
      <Box>
        <Heading>
          <p>Seja bem-vindo à UniBarberShop!</p>
          <p>Cabelinho na régua? Só aqui 😎💇</p>
        </Heading>
        <Background>
          <FormAuth>
            <ContainerForm>
              <HeadingForm>
                <p>Entre com sua conta</p>
                <p>Estamos muito animados em te ver novamente!</p>
              </HeadingForm>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <FormItem
                  name="email"
                  label="Email"
                  required
                  rules={[
                    {
                      type: 'email',
                      message: 'O e-mail digitado não é um e-mail válido.',
                    },
                    {
                      required: true,
                      message: 'Por favor, digite seu e-mail.',
                    },
                  ]}
                  hasFeedback
                >
                  <Input maxLength={100} />
                </FormItem>
                <FormItem
                  name="password"
                  label="Senha"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, insira sua senha.',
                    },
                    {
                      min: 8,
                      message:
                        'Sua senha deve conter, no mínimo, 8 caracteres.',
                    },
                  ]}
                  hasFeedback
                >
                  <PasswordInput maxLength={150} />
                </FormItem>
                <FormItem>
                  <AuthButton htmlType="submit">Entrar</AuthButton>
                  <RedirectLabel>
                    Você é novo por aqui?{' '}
                    <Link to="/register">Cadastre-se</Link>
                  </RedirectLabel>
                </FormItem>
                <InfoFooter>
                  <p>UniBarberShop © 2021 - Todos os Direitos Reservados</p>
                </InfoFooter>
              </Form>
            </ContainerForm>
          </FormAuth>
        </Background>
      </Box>
    </Container>
  )
}

export default Login
