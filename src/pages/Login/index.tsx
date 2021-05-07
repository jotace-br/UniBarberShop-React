import { Form } from "antd";
import React from "react";
import Checkbox from "../../components/Checkbox";
import { FormItem, Input, PasswordInput } from "../../components/Input";
import { Link } from "../../components/Link";
import { ButtonGoogle } from "../../components/SocialButton";
import api from "../../services/api";
import { login, TOKEN_USER } from "../../services/login";
import {
  Background,
  Container,
  ContainerForm,
  FormLogin,
  LoginButton,
  Logo,
  SubButtonContainer,
  HeadingForm,
  DividerOr,
  RegistrationLabel,
  ContainerSocial,
} from "./style";

// import { Container } from './styles';
const Login: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = async (body: object) => {
    try {
      const { data } = await api.post('/login', body)
      await localStorage.setItem(TOKEN_USER, JSON.stringify(data.user))
      await login(data.token)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Container>
      <Background />
      <FormLogin>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Login.</p>
            <p>
              Entre com os dados de acesso definidos por você no ato do
              cadastro.
            </p>
          </HeadingForm>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <FormItem name="email" label="Email">
              <Input placeholder="Digite seu email de acesso..." />
            </FormItem>
            <FormItem name="password" label="Senha">
              <PasswordInput placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem>
              <LoginButton htmlType="submit">Entrar</LoginButton>
              <SubButtonContainer>
                <Checkbox>Lembrar de mim</Checkbox>
                <Link>Esqueci minha senha</Link>
              </SubButtonContainer>
              <RegistrationLabel>
                Você é novo por aqui? <Link>Cadastre-se</Link>
              </RegistrationLabel>
              <DividerOr>
                <hr />
                <p>Ou</p>
                <hr />
              </DividerOr>
              <ContainerSocial>
                <p>Entre com suas redes sociais</p>
                <ButtonGoogle />
              </ContainerSocial>
            </FormItem>
          </Form>
        </ContainerForm>
      </FormLogin>
    </Container>
  );
};

export default Login;
