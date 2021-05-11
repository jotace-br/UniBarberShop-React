import { Space } from "antd";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import Table, { TableButton } from "../../../components/Table";
import { Tab, TabsPane } from "../../../components/Tabs";
import { Tag } from "../../../components/Tag";

// import { Container } from './styles';

const Api: React.FC = () => {
  const [isDataAvailable] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
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
          <Tag
            status={status.includes("ATIVO") ? "active" : "error"}
            color={status.includes("ATIVO") ? "sucess" : "error"}
          >
            {status.toUpperCase()}
          </Tag>
        </span>
      ),
    },
    {
      title: "Opções",
      key: "options",
      render: (text: string, record: any) => (
        <Space size="middle">
          <TableButton a="edit">
            <FaEdit />
          </TableButton>

          <TableButton a="trash">
            <FaTrash />
          </TableButton>
          {/* <a href="http://pudim.com.br">Editar {record.endpoint}</a>
          <a href="http://pudim.com.br">Delete</a> */}
        </Space>
      ),
    },
  ];

  function showTotal(total: any) {
    return (
      <div>
        <p>
          Mostrando: <span>{total}</span> resultados
        </p>
      </div>
    );
  }

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
    {
      key: "4",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "5",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "6",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "7",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "8",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "9",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "10",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "11",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "12",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
    {
      key: "13",
      endpoint: "Mussum Ipsum",
      method: "POST",
      status: "ATIVO",
    },
  ];
  // interface DataType {
  //   key: React.Key;
  //   endpoint: string;
  //   method: string;
  //   status: string;
  // }

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
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
            pagination={{ showTotal: showTotal }}
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
        <Tab>
          <TabsPane tab="Todos" key="1">
            {isTableEmpty()}
          </TabsPane>
          <TabsPane tab="Ativos" key="2">
            <p>ativos</p>
          </TabsPane>
          <TabsPane tab="Falha" key="3">
            <p>falha</p>
          </TabsPane>
        </Tab>
      </CardContent>
    </Card>
  );
};

export default Api;
