import React, { useState } from "react";

import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import { TextWithIcon } from "../../../components/TextWithIcon";
import { StyledTab, StyledTabPane } from "../../../components/Tabs";

import { Typography } from "antd";

import { IoReload } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";

// import { Container } from './styles';
const { Text } = Typography;

const Api: React.FC = () => {
  const [isToken, setIsToken] = useState(false);

  const noTokenYetMessage = () => {
    if (isToken) {
      return (
        <>
          <div>
            <p>API Key</p>
            <Text copyable>pxpay_534354_agfadkjfgdf</Text>
          </div>

          <div>
            <p>API Password</p>
            <Text copyable>pxpay_534354_agfadkjfgdf</Text>
          </div>

          <Text>
            <FaFileAlt />A documentação da API está disponível em:{" "}
            <a href="http://pudim.com.br">www.link.com.br</a>
          </Text>
        </>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <b>Por enquanto, não há tokens de acesso :(</b>
          </p>
          <p>Você pode gerar um novo token clicando aqui</p>

          <ButtonPrimary>
            <TextWithIcon>
              Novo token &nbsp;
              <IoReload />
            </TextWithIcon>
          </ButtonPrimary>
        </div>
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Chaves da API</CardTitle>
          <CardSubTitle>Veja as chaves de API ou cadastre novas</CardSubTitle>
        </div>
        <ButtonPrimary>
          <TextWithIcon>
            Novo token &nbsp;
            <IoReload />
          </TextWithIcon>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <StyledTab>
          <StyledTabPane tab="Token de acesso" key="1">
            {noTokenYetMessage()}
          </StyledTabPane>
        </StyledTab>
      </CardContent>
    </Card>
  );
};

export default Api;
