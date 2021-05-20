import { Space } from "antd";
import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ButtonPrimary } from "../../../../components/Button";
import { FormItem, Input } from "../../../../components/Input";
import {
  errorNotification,
  successNotification,
} from "../../../../components/Notification";
import Table, { TableAddForm, TableButton } from "../../../../components/Table";
import { Tag } from "../../../../components/Tag";
import { useFetch } from "../../../../hooks/useFetch";
import api from "../../../../services/api";

interface Props {
  filter: string;
}

const TableWebhooks: React.FC<Props> = ({ filter }) => {
  const [isDataAvailable] = useState(false);
  const { data: webhooks, mutate } = useFetch("/get_webhook_endpoint");

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
          <TableAddForm>
            <Form layout="vertical">
              <FormItem label="Field A">
                <Input placeholder="input placeholder" />
              </FormItem>
              <FormItem label="Field B">
                <Input placeholder="input placeholder" />
              </FormItem>
              <FormItem>
                <ButtonPrimary>Salvar</ButtonPrimary>
              </FormItem>
            </Form>
          </TableAddForm>
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
  return isTableEmpty();
};

export default TableWebhooks;
