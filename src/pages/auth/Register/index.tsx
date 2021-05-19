import React, { useState } from "react";

import history from "../../../routes/history";
import api from "../../../services/api";

import { Form } from "antd";

import MaskedInput from "antd-mask-input";
import ReCAPTCHA from "react-google-recaptcha";

import { IoIosLogIn /* IoMdBusiness */ } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";
import IllustrationRegister from "../../../assets/register.svg";
import { FormItem, Input, PasswordInput } from "../../../components/Input";
import { Link } from "../../../components/Link";
import {
  errorNotification,
  successNotification,
} from "../../../components/Notification";
// import Select from "../../../components/Select";
import {
  AuthButton,
  Background,
  Container,
  ContainerForm,
  Divider,
  DividerIcon,
  FormAuth,
  Heading,
  HeadingForm,
  Illustration,
  InfoFooter,
  Logo,
  RedirectLabel,
  WrapperRecaptcha,
} from "../style";

// const { Option } = Select;

const Register: React.FC = () => {
  const [token, setToken] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (body: object) => {
    try {
      if (!token)
        errorNotification("Por favor, verifique se você não é um robô.");

      await api.post("/register", body);
      successNotification("Usuário cadastrado com sucesso!");

      history.push("/login");
    } catch (err) {
      errorNotification(err.response.data.message);
    }
  };

  return (
    <Container>
      <Background>
        <Heading>
          <p>É BOM TE VER POR AQUI</p>
          <p>Seja bem vindo!</p>
        </Heading>
        <Illustration src={IllustrationRegister} />
      </Background>
      <FormAuth>
        <ContainerForm>
          <Logo></Logo>
          <HeadingForm>
            <p>Cadastro</p>
            <p>
              Crie uma conta para acessar nossa plataforma, basta preencher os
              campos abaixo.
            </p>
          </HeadingForm>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <DividerIcon>
              <hr />
              <RiAccountBoxLine />
              <p>Dados Pessoais</p>
              <hr />
            </DividerIcon>
            <FormItem
              name="name"
              label="Nome completo"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu nome completo.",
                },
                {
                  min: 3,
                  message: "Seu nome deve ter, no mínimo, 3 caracteres.",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Digite seu nome completo..."
                maxLength={100}
              />
            </FormItem>
            <FormItem
              name="cell_phone"
              label="Telefone"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu telefone.",
                },
              ]}
              hasFeedback
            >
              <MaskedInput
                mask="(11) 11111-1111"
                maxLength={11}
                placeholder="Digite seu número de telefone..."
                style={{
                  width: "100%",
                  height: "36px",
                  borderRadius: "6px",
                  backgroundColor: "#2C2C2C",
                  border: "none",
                  color: "#E8E8E8",
                }}
              />
            </FormItem>
            <DividerIcon>
              <hr />
              <IoIosLogIn />
              <p>Dados de acesso</p>
              <hr />
            </DividerIcon>
            <FormItem
              name="email"
              label="E-mail"
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
              <Input placeholder="Digite seu e-mail..." />
            </FormItem>
            <FormItem
              name="password"
              label="Senha"
              tooltip="Mínimo de 8 caracteres."
              rules={[
                {
                  required: true,
                  message: "Por favor, digite uma senha.",
                },
                {
                  min: 8,
                  message: "Sua senha deve conter, no mínimo, 8 caracteres.",
                },
              ]}
              hasFeedback
            >
              <PasswordInput
                placeholder="Digite sua senha..."
                maxLength={150}
              />
            </FormItem>
            <FormItem
              name="password_check"
              label="Confirme sua senha"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirme sua senha.",
                },
                {
                  min: 8,
                  message: "Sua senha deve conter, no mínimo, 8 caracteres.",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("As duas senhas digitadas não conferem.")
                    );
                  },
                }),
              ]}
            >
              <PasswordInput
                placeholder="Digite sua senha..."
                maxLength={150}
              />
            </FormItem>
            {/* <DividerIcon>
              <hr />
              <IoMdBusiness />
              <p>Dados da empresa</p>
              <hr />
            </DividerIcon>
            <FormItem
              name="company_name"
              label="Nome da empresa"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome de sua empresa.",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Digite o nome da sua empresa..."
                maxLength={100}
              />
            </FormItem>
            <FormItem
              name="occupation"
              label="Área de atuação"
              rules={[
                {
                  required: true,
                  message:
                    "Por favor, insira a área de atuação de sua empresa.",
                },
              ]}
              hasFeedback
            >
              <Select placeholder="Selecione uma opção">
                <Option value="Marketing Digital">Marketing Digital</Option>
                <Option value="Empreendedorismo">Empreendedorismo</Option>
                <Option value="Gestão de Tráfego">Gestão de Tráfego</Option>
                <Option value="Desenvolvimento pessoal">
                  Desenvolvimento pessoal
                </Option>
              </Select>
            </FormItem>
            <FormItem
              name="identification"
              label="CPF ou CNPJ"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua documentação.",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Digite seu CPF ou CNPJ..." />
            </FormItem> */}
            <Divider />
            <WrapperRecaptcha>
              <ReCAPTCHA
                sitekey="6Ldn0NQaAAAAAPMwZPGhiDodUC8P0FCGf_7SMa3G"
                onChange={(token: any) => setToken(token)}
                onExpired={() =>
                  errorNotification(
                    "A verificação expirou.",
                    "Por favor, confirme que não é um robô."
                  )
                }
                theme="dark"
                size="normal"
                hl="pt-BR"
              />
            </WrapperRecaptcha>
            <RedirectLabel>
              Ao se cadastrar, você concorda com os{" "}
              <Link to="">Termos de Uso</Link> da PXPay.
            </RedirectLabel>
            <AuthButton htmlType="submit">Cadastrar</AuthButton>
          </Form>
        </ContainerForm>
        <InfoFooter>
          <p>Pxpay © 2021 by XGrow - Todos os Direitos Reservados</p>
        </InfoFooter>
      </FormAuth>
    </Container>
  );
};

export default Register;
