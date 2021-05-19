import React from 'react';

import api from '../../../services/api';

import { GoogleLogin } from 'react-google-login';
import { login } from '../../../services/login';

import { Form } from 'antd';

import {
  AuthButton,
  Background,
  Container,
  ContainerForm,
  ContainerSocial,
  DividerOr,
  FormAuth,
  Heading,
  HeadingForm,
  Illustration,
  InfoFooter,
  Logo,
  RedirectLabel,
  SubButtonContainer,
} from '../style';

import { FormItem, Input, PasswordInput } from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import { Link } from '../../../components/Link';

import { ButtonGoogle } from '../../../components/SocialButton';

import IllustrationLogin from '../../../assets/login.svg';
import { errorNotification } from '../../../components/Notification';

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (body: object) => {
    try {
      const { data } = await api.post('/login', body);
      await login(data.token, data.user);
    } catch (err) {
      errorNotification(err.response.data.message);
    }
  };

  const handleLogin = async () => {
    window.open(
      `${process.env.REACT_APP_API_LINK}/google_auth`,
      'mywindow',
      'location=1,status=1,scrollbars=1, width=800,height=800'
    );
    window.addEventListener('message', ({ data }) => {
      login(data.token, data.user);
    });
  };

  return (
    <Container>
      <Background>
        <Heading>
          <p>A FORMA MAIS PODEROSA DE</p>
          <p>Gestão de vendas online</p>
          <p>
            Com a Pxpay é fácil vender, comprar e indicar compradores online de
            maneira fácil, prática e segura!
          </p>
        </Heading>
        <Illustration src={IllustrationLogin} />
      </Background>
      <FormAuth>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Login</p>
            <p>
              Entre com os dados de acesso definidos por você no ato do
              cadastro.
            </p>
          </HeadingForm>
          <Form form={form} layout='vertical' onFinish={onFinish}>
            <FormItem
              name='email'
              label='Email'
              required
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
              <Input
                placeholder='Digite seu email de acesso...'
                maxLength={100}
              />
            </FormItem>
            <FormItem
              name='password'
              label='Senha'
              rules={[
                {
                  required: true,
                  message: 'Por favor, insira sua senha.',
                },
                {
                  min: 8,
                  message: 'Sua senha deve conter, no mínimo, 8 caracteres.',
                },
              ]}
              hasFeedback
            >
              <PasswordInput
                placeholder='Digite sua senha de acesso...'
                maxLength={150}
              />
            </FormItem>
            <FormItem>
              <AuthButton htmlType='submit'>Entrar</AuthButton>
              <SubButtonContainer>
                <FormItem name='remember_me' valuePropName='checked'>
                  <Checkbox>Lembrar de mim</Checkbox>
                </FormItem>
                <FormItem>
                  <Link to='/forgot-password'>Esqueci minha senha</Link>
                </FormItem>
              </SubButtonContainer>
              <RedirectLabel>
                Você é novo por aqui? <Link to='/register'>Cadastre-se</Link>
              </RedirectLabel>
              <DividerOr>
                <hr />
                <p>Ou</p>
                <hr />
              </DividerOr>
              <ContainerSocial>
                <p>Entre com suas redes sociais</p>
                <GoogleLogin
                  clientId={
                    '947403029672-8ge84a6mssj1puagr3dkn6i98mk6bdmk.apps.googleusercontent.com'
                  }
                  render={(renderProps) => (
                    <ButtonGoogle
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    />
                  )}
                  buttonText='Login'
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                />
              </ContainerSocial>
            </FormItem>
            <InfoFooter>
              <p>Pxpay © 2021 by XGrow - Todos os Direitos Reservados</p>
            </InfoFooter>
          </Form>
        </ContainerForm>
      </FormAuth>
    </Container>
  );
};

export default Login;
