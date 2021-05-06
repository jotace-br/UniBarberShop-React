import { Form } from "antd";
import React from "react";
import Checkbox from "../../components/Checkbox";
import { FormItem, Input, PasswordInput } from "../../components/Input";
import { Link } from "../../components/Link";
import { ButtonGoogle } from "../../components/SocialButton";
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
  ContainerSocial
} from "./style";

// import { Container } from './styles';
const Login: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Container>
      <Background />
      <FormLogin>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Login.</p>
            <p>Entre com os dados de acesso definidos por você no ato do cadastro.</p>
          </HeadingForm>
          <Form form={form} layout="vertical">
            <FormItem label="Email">
              <Input placeholder="Digite seu email de acesso..." />
            </FormItem>
            <FormItem label="Senha">
              <PasswordInput placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem>
              <LoginButton>Entrar</LoginButton>
              <SubButtonContainer>
                <Checkbox>Lembrar de mim</Checkbox>
                <Link>Esqueci minha senha</Link>
              </SubButtonContainer>
              <RegistrationLabel>Você é novo por aqui? <Link>Cadastre-se</Link></RegistrationLabel>
              <DividerOr>
                <hr/>
                <p>Ou</p>
                <hr/>
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
