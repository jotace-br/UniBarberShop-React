import React, { useState } from "react";

import { useFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";

import { Space } from "antd";

import { FaEdit, FaTrash } from "react-icons/fa";

import {
  errorNotification,
  successNotification,
} from "../../../components/Notification";

import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import { ButtonPrimary } from "../../../components/Button";
import Table, { TableButton } from "../../../components/Table";
import { TabCard, TabsPane } from "../../../components/Tabs";
import { Tag } from "../../../components/Tag";

const Webhooks: React.FC = () => {
  const [isDataAvailable] = useState(false);

  const { data: webhooks, mutate } = useFetch("/get_webhook_endpoint");

  // const handleCreate = async (body: any) => {
  //   // no Form, terá esses três campos
  //   const body = {
  //     url_webhook,
  //     method,
  //     trigger,
  //   };

  //   try {
  //     const response = await api.post("/create_webhook_endpoint", body);
  //     mutate();
  //     successNotification(response.data.message);
  //   } catch (error) {
  //     errorNotification(error.response.data.message);
  //   }
  //   console.log("oops");
  // };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/delete_webhook_endpoint/${id}`);
      mutate();
      successNotification("Webhook deletado com sucesso!");
    } catch (error) {
      errorNotification("Ocorreu um erro ao remover o Webhook.");
    }
  };

  const handleEdit = async (element: object) => {
    console.log(element);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Endpoint",
      dataIndex: "url_webhook",
      key: "url_webhook",
      render: (link: string) => (
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      ),
    },
    {
      title: "Método",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      key: "active",
      dataIndex: "active",
      render: (status: boolean) => (
        <span>
          <Tag
            status={status ? "active" : "error"}
            color={status ? "success" : "error"}
          >
            {status ? "ATIVO" : "FALHA"}
          </Tag>
        </span>
      ),
    },
    {
      title: "Opções",
      key: "options",
      render: ({ id }: any, fullObject: any) => (
        <Space size="middle">
          <TableButton a="edit" onClick={() => handleEdit(fullObject)}>
            <FaEdit />
          </TableButton>

          <TableButton a="trash" onClick={() => handleDelete(id)}>
            <FaTrash />
          </TableButton>
        </Space>
      ),
    },
  ];

  function showTotal(total: any) {
    return (
      <div>
        <p>
          Mostrando: <span>{total}</span>{" "}
          {total > 1 ? "resultados" : "resultado"}
        </p>
      </div>
    );
  }

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
            dataSource={webhooks?.data.records.map((items: any) => items)}
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
        <TabCard>
          <TabsPane tab="Todos" key="1">
            {isTableEmpty()}
          </TabsPane>
          <TabsPane tab="Ativos" key="2">
            <p>ativos</p>
          </TabsPane>
          <TabsPane tab="Falha" key="3">
            <p>falha</p>
          </TabsPane>
        </TabCard>
      </CardContent>
    </Card>
  );
};

export default Webhooks;
