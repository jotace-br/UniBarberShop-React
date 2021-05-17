import React from "react";

import { useFetchWithNoRefresh } from "../../../hooks/useFetchWithNoRefresh";
import api from "../../../services/api";

import { Typography } from "antd";

import { FaFileAlt } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import { TabCard, TabsPane } from "../../../components/Tabs";
import { TextWithIcon } from "../../../components/TextWithIcon";

const { Text } = Typography;

const Api: React.FC = () => {
  const { data: keys, mutate } = useFetchWithNoRefresh("/get-key");

  const generateNewKeys = async () => {
    const { data: newKeys } = await api.get("/get-key");
    mutate(newKeys);
  };

  const noTokenYetMessage = () => {
    if (keys) {
      return (
        <>
          <div>
            <p>API Key</p>
            <Text copyable>{keys ? keys.keys.api_key : "..."}</Text>
          </div>

          <div>
            <p>API Password</p>
            <Text copyable>{keys ? keys.keys.api_password : "..."}</Text>
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

          <ButtonPrimary
            onClick={() => {
              generateNewKeys();
            }}
            disabled={keys}
          >
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
        <ButtonPrimary
          onClick={() => {
            generateNewKeys();
          }}
          disabled={keys}
        >
          <TextWithIcon>
            Novo token &nbsp;
            <IoReload />
          </TextWithIcon>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <TabCard>
          <TabsPane tab="Token de acesso" key="1">
            {noTokenYetMessage()}
          </TabsPane>
        </TabCard>
      </CardContent>
    </Card>
  );
};

export default Api;
