import React, { useState } from "react";

import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import { StyledTab, StyledTabPane } from "../../../components/Tabs";

import { Table, Space, Tag } from "antd";

// import { Container } from './styles';

const Api: React.FC = () => {
  const [isDataAvailable] = useState(false);

  const columns = [
    {
      title: "Endpoint",
      dataIndex: "endpoint",
      key: "endpoint",
      render: (text: string) => <a href="http://pudim.com.br">{text}</a>,
    },
    {
      title: "Método",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: string) => (
        <span>
          <Tag color={status.includes("ATIVO") ? "green" : "volcano"}>
            {status.toUpperCase()}
          </Tag>
        </span>
      ),
    },
    {
      title: "Opções",
      key: "options",
      render: (text: string, record: { endpoint: string }) => (
        <Space size="middle">
          <a href="http://pudim.com.br">Editar {record.endpoint}</a>
          <a href="http://pudim.com.br">Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "2",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "FALHA",
    },
    {
      key: "3",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
  ];
  interface DataType {
    key: React.Key;
    endpoint: string;
    method: string;
    status: string;
  }

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.endpoint === "Disabled User", // Column configuration not to be checked
      endpoint: record.endpoint,
    }),
  };

  const isTableEmpty = () => {
    if (!isDataAvailable) {
      return (
        <div>
          <Table
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={data}
          />
        </div>
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
            <p>Adicionar +</p>
          </ButtonPrimary>
        </div>
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Listagem de webhooks</CardTitle>
          <CardSubTitle>
            Veja todos os webhooks cadastrados e adicione novos
          </CardSubTitle>
        </div>
        <ButtonPrimary>
          <p>Adicionar +</p>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <StyledTab>
          <StyledTabPane tab="Todos" key="1">
            {isTableEmpty()}
          </StyledTabPane>
          <StyledTabPane tab="Ativos" key="2">
            <p>ativos</p>
          </StyledTabPane>
          <StyledTabPane tab="Falha" key="3">
            <p>falha</p>
          </StyledTabPane>
        </StyledTab>
      </CardContent>
    </Card>
  );
};

export default Api;
