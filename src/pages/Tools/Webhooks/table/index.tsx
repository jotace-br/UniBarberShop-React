import React, { useState } from 'react'

import { useFetch } from '../../../../hooks/useFetch'
import api from '../../../../services/api'

import Table, { TableAddForm, TableButton } from '../../../../components/Table'

import { Form, Space, Tooltip } from 'antd'

import { FormItem, Input } from '../../../../components/Input'
import { ButtonPrimary } from '../../../../components/Button'
import Select from '../../../../components/Select'

import { Tag } from '../../../../components/Tag'

import {
  errorNotification,
  successNotification,
} from '../../../../components/Notification'

import { FaEdit, FaTrash } from 'react-icons/fa'
import { FcEmptyTrash } from 'react-icons/fc'

const { Option } = Select

interface Props {
  filter: string
}

interface EditProps {
  url_webhook: string
  trigger: string
  method: string
  active: boolean
  id: number
}

const TableWebhooks: React.FC<Props> = ({ filter }) => {
  const [form] = Form.useForm()

  const [isEditingMode, setIsEditingMode] = useState(false)
  const [bodyToEdit, setBodyToEdit] = useState<EditProps>()

  const { data: webhooks, mutate } = useFetch('/get_webhook_endpoint')

  const [isDataAvailable, setIsDataAvailable] = useState(
    webhooks?.data.records.length > 0,
  )

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/delete_webhook_endpoint/${id}`)
      mutate()
      successNotification('Webhook deletado com sucesso!')
    } catch (error) {
      errorNotification('Ocorreu um erro ao remover o Webhook.')
    }
  }

  const handleCreate = async (body: object) => {
    setIsEditingMode(false)
    try {
      const { data } = await api.post('/create_webhook_endpoint', body)
      successNotification(data.message)
    } catch (error) {
      errorNotification(error.response.data.message)
    } finally {
      form.resetFields()
      mutate()
    }
  }

  const webhookContent = (element: any) => {
    form.setFieldsValue({
      url_webhook: element.url_webhook,
      trigger: element.trigger,
      method: element.method,
    })

    setBodyToEdit(element)
  }

  const handleEdit = async (body: any) => {
    const editWebhook = {
      active: bodyToEdit?.active,
      id: bodyToEdit?.id,
      method: body.method,
      trigger: body.method,
      url_webhook: body.url_webhook,
    }

    try {
      console.log(editWebhook)

      // falta criar a rota para isso
      // const { data } = await api.put(`/edit_webhook_endpoint${editWebhook.id}`, editWebhook)
      // successNotification(data.message)
    } catch (error) {
      errorNotification(error.response.data.message)
    } finally {
      // mutate()
      form.resetFields()
      setIsEditingMode(false)
    }
  }

  const handleIsEditingOrCreating = (body: any) => {
    isEditingMode ? handleEdit(body) : handleCreate(body)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Endpoint',
      dataIndex: 'url_webhook',
      key: 'url_webhook',
      render: (link: string) => (
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      ),
    },
    {
      title: 'Método',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'Status',
      key: 'active',
      dataIndex: 'active',
      render: (status: boolean) => (
        <span>
          <Tag
            status={status ? 'active' : 'error'}
            color={status ? 'success' : 'error'}
          >
            {status ? 'ATIVO' : 'FALHA'}
          </Tag>
        </span>
      ),
    },
    {
      title: 'Opções',
      key: 'options',
      render: ({ id }: any, fullObject: any) => (
        <Space size="middle">
          <TableButton
            a="edit"
            onClick={() => {
              setIsEditingMode(true)
              webhookContent(fullObject)
            }}
          >
            <FaEdit />
          </TableButton>

          <TableButton a="trash" onClick={() => handleDelete(id)}>
            <FaTrash />
          </TableButton>
        </Space>
      ),
    },
  ]

  function showTotal(total: any, range: any) {
    return (
      <div>
        <p>
          Mostrando: {range[0]}-{range[1]} de <span>{total}</span>{' '}
          {total > 1 ? 'resultados' : 'resultado'}
        </p>
      </div>
    )
  }

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      )
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.endpoint === 'Disabled User', // Column configuration not to be checked
      endpoint: record.endpoint,
    }),
  }

  const isTableEmpty = () => {
    console.log(isDataAvailable)
    if (isDataAvailable) {
      return (
        <div>
          <TableAddForm>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleIsEditingOrCreating}
            >
              <FormItem
                name="url_webhook"
                label="Endpoint"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, insira o link do webhook.',
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Insira o endpoint..." autoFocus />
              </FormItem>

              <FormItem
                name="trigger"
                label="Gatilho"
                rules={[
                  {
                    required: true,
                    message:
                      'Por favor, selecione um gatilho para seu webhook.',
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="Selecione um gatilho">
                  <Option value="OnStatusSubscriberUpdate">
                    Ao atualizar status do assinante
                  </Option>
                  <Option value="OnSale">Ao completar uma compra</Option>
                </Select>
              </FormItem>

              <FormItem
                name="method"
                label="Método"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, selecione o método do seu webhook.',
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="Selecione um método">
                  <Option value="POST">POST</Option>
                  <Option value="PUT">PUT</Option>
                </Select>
              </FormItem>

              <Tooltip title="Limpar todos os campos e adicionar um novo webhook.">
                <TableButton
                  a="trash"
                  onClick={() => {
                    form.resetFields()
                    setIsEditingMode(false)
                  }}
                  hidden={!isEditingMode}
                >
                  <FcEmptyTrash />
                </TableButton>
              </Tooltip>

              <FormItem>
                <ButtonPrimary htmlType="submit">Salvar</ButtonPrimary>
              </FormItem>
            </Form>
          </TableAddForm>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={webhooks?.data.records.map((items: any) => items)}
            pagination={{ showTotal: showTotal }}
          />
        </div>
      )
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>
            <b>Por enquanto, não há tokens de acesso :(</b>
          </p>
          <p>Você pode gerar um novo token clicando aqui</p>

          <ButtonPrimary
            onClick={() => {
              setIsDataAvailable(true)
            }}
          >
            <p>Adicionar +</p>
          </ButtonPrimary>
        </div>
      )
    }
  }
  return isTableEmpty()
}

export default TableWebhooks
