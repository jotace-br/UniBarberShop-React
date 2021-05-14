import { Form } from "antd";
import React from "react";
import Illustration from "../../assets/login.svg";
import Checkbox from "../../components/Checkbox";
import { FormItem, Input, PasswordInput } from "../../components/Input";
import { Link } from "../../components/Link";
import { ButtonGoogle } from "../../components/SocialButton";
import api from "../../services/api";
import { login } from "../../services/login";
import {
  Background,
  Container,
  ContainerForm,
  ContainerSocial,
  DividerOr,
  FormLogin,
  Heading,
  HeadingForm,
  IllustrationLogin,
  LoginButton,
  Logo,
  RegistrationLabel,
  SubButtonContainer,
} from "./style";
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
        <IllustrationLogin src={Illustration} />
      </Background>
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
            <FormItem
              name="email"
              label="Email"
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
              hasFeedback
            >
              <Input
                placeholder="Digite seu email de acesso..."
                maxLength={100}
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
                {
                  min: 8,
                  message: "Sua senha deve conter, no mínimo, 8 caracteres.",
                },
              ]}
              hasFeedback
            >
              <PasswordInput
                placeholder="Digite sua senha de acesso..."
                maxLength={150}
              />
            </FormItem>
            <FormItem>
              <LoginButton htmlType="submit">Entrar</LoginButton>
              <SubButtonContainer>
                <FormItem name="remember_me" valuePropName="checked">
                  <Checkbox>Lembrar de mim</Checkbox>
                </FormItem>
                <FormItem>
                  <Link to="/">Esqueci minha senha</Link>
                </FormItem>
              </SubButtonContainer>
              <RegistrationLabel>
                Você é novo por aqui? <Link to="/register">Cadastre-se</Link>
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
