import { Form } from "antd";
import React from "react";
import IllustrationForgot from "../../../assets/forgot.svg";
import { FormItem, Input } from "../../../components/Input";
import api from "../../../services/api";
import { login } from "../../../services/login";
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
} from "../style";
const ForgotPassword: React.FC = () => {
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
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <FormItem name="email" label="Email">
              <Input placeholder="Digite seu email de acesso..." />
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
    </Container>
  );
};

export default ForgotPassword;
