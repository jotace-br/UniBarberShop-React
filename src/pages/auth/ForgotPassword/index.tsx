import React from "react";

import api from "../../../services/api";
import history from "../../../routes/history";

import { Form } from "antd";

import IllustrationForgot from "../../../assets/forgot.svg";
import { FormItem, Input } from "../../../components/Input";
import {
  errorNotification,
  successNotification,
} from "../../../components/Notification";

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
      await api.post("/forgot-password", body);
      successNotification(
        "Geramos uma nova senha para você!",
        "Verifique o seu email, caso não esteja na caixa de entrada verifique o spam."
      );
      history.push("/login");
    } catch (err) {
      errorNotification(err.response.data.message);
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
                  type: "email",
                  message: "O E-mail digitado não é um e-mail válido.",
                },
                {
                  required: true,
                  message: "Por favor, insira seu E-mail.",
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
    </Container>
  );
};

export default ForgotPassword;
