import { Form } from "antd";
import React from "react";
import { FaAddressBook } from "react-icons/fa";
import Illustration from "../../assets/login.svg";
import { FormItem, Input, PasswordInput } from "../../components/Input";
import api from "../../services/api";
import { login } from "../../services/login";
import {
  Background,
  Container,
  ContainerForm,
  DividerIcon,
  FormLogin,
  Heading,
  HeadingForm,
  IllustrationLogin,
  LoginButton,
  Logo,
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
              <FaAddressBook />
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
              <FaAddressBook />
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
              <FaAddressBook />
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
            <LoginButton htmlType="submit">Cadastrar</LoginButton>
            {/* <RegistrationLabel>
                Você é novo por aqui? <Link>Cadastre-se</Link>
              </RegistrationLabel> */}
          </Form>
        </ContainerForm>
      </FormLogin>
    </Container>
  );
};

export default Register;
