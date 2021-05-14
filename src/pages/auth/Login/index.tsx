import { Form } from "antd";
import React from "react";
import IllustrationLogin from "../../../assets/login.svg";
import Checkbox from "../../../components/Checkbox";
import { FormItem, Input, PasswordInput } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { ButtonGoogle } from "../../../components/SocialButton";
import api from "../../../services/api";
import { login } from "../../../services/login";
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
} from "../style";
const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (body: object) => {
    try {
      const { data } = await api.post("/login", body);
      await login(data.token, data.user);
    } catch (err) {
      console.log(err);
    }
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
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <FormItem
              name="email"
              label="Email"
              required
              rules={[
                {
                  type: "email",
                  message: "O E-mail digitado não é um e-mail válido.",
                },
                {
                  required: true,
                  message: "Por favor, digite seu e-mail.",
                },
              ]}
            >
              <Input
                placeholder="Digite seu email de acesso..."
                maxLength={100}
                required
              />
            </FormItem>
            <FormItem
              name="password"
              label="Senha"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua senha.",
                },
              ]}
              hasFeedback
            >
              <PasswordInput
                placeholder="Digite sua senha de acesso..."
                maxLength={150}
                required
              />
            </FormItem>
            <FormItem>
              <AuthButton htmlType="submit">Entrar</AuthButton>
              <SubButtonContainer>
                <Checkbox>Lembrar de mim</Checkbox>
                <Link to="/forgot-password">Esqueci minha senha</Link>
              </SubButtonContainer>
              <RedirectLabel>
                Você é novo por aqui? <Link to="/register">Cadastre-se</Link>
              </RedirectLabel>
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
