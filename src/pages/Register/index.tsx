import { Form } from "antd";
import React from "react";
import { IoIosLogIn, IoMdBusiness } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";
import Illustration from "../../assets/register.svg";
import { FormItem, Input, PasswordInput } from "../../components/Input";
import { Link } from "../../components/Link";
import api from "../../services/api";
import { login } from "../../services/login";
import {
  Background,
  Container,
  ContainerForm,
  Divider,
  DividerIcon,
  FormLogin,
  Heading,
  HeadingForm,
  IllustrationLogin,
  InfoFooter,
  LoginButton,
  Logo,
  RegistrationLabel,
} from "./style";
const Register: React.FC = () => {
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
          <p>É BOM TE VER POR AQUI</p>
          <p>Seja bem vindo!</p>
        </Heading>
        <IllustrationLogin src={Illustration} />
      </Background>
      <FormLogin>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Cadastro</p>
            <p>
              Crie uma conta para acessar nossa plataforma, basta preencher os
              campos abaixo.
            </p>
          </HeadingForm>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <DividerIcon>
              <hr />
              <RiAccountBoxLine />
              <p>Dados Pessoais</p>
              <hr />
            </DividerIcon>
            <FormItem name="email" label="Nome completo">
              <Input placeholder="Digite seu email de acesso..." />
            </FormItem>
            <FormItem name="phone" label="Telefone">
              <PasswordInput placeholder="Digite sua senha de acesso..." />
            </FormItem>

            <DividerIcon>
              <hr />
              <IoIosLogIn />
              <p>Dados de acesso</p>
              <hr />
            </DividerIcon>

            <FormItem name="email" label="E-mail">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem name="password" label="Senha">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem name="password_check" label="Confirme sua senha">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>

            <DividerIcon>
              <hr />
              <IoMdBusiness />
              <p>Dados da empresa</p>
              <hr />
            </DividerIcon>

            <FormItem name="company_name" label="Nome da empresa">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem name="occupation" label="Área de atuação">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <FormItem name="identification" label="CPF ou CNPJ">
              <Input placeholder="Digite sua senha de acesso..." />
            </FormItem>
            <Divider />
            <RegistrationLabel>
              Ao se cadastrar, você concorda com os{" "}
              <Link to="">Termos de Uso</Link> da PXPay.
            </RegistrationLabel>
            <LoginButton htmlType="submit">Cadastrar</LoginButton>
          </Form>
        </ContainerForm>
        <InfoFooter>
          <p>Pxpay © 2021 by XGrow - Todos os Direitos Reservados</p>
        </InfoFooter>
      </FormLogin>
    </Container>
  );
};

export default Register;
