import React, { useState } from 'react'

import { useFetch } from 'hooks/useFetch'

import Table, { MenuDropdown, TableDropdownButton } from 'components/Table'

import { Tag } from 'components/Tag'
import { Space } from 'antd'

import { FaEllipsisV } from 'react-icons/fa'

interface Props {
  filter?: string
}

const TableSells: React.FC<Props> = ({ filter }) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(5)

  const { data: dataTable, mutate } = useFetch(
    `/latest-sales?page_index=${pageIndex}&payment_status=${filter}`,
  )

  // `/latest-sales?page_index=${pageIndex}&page_size=${pageSize}&payment_status=${paymentFilter}`;

  //`/latest-sales?orderColunm=${colunm}&order=${order}&page_index=${page}&page_size=${rowsPerPage}&produto=${produto}&costume=${comprador}&payment_method=${method}&payment_status=${status}&id=${id}`

  const setStatusType = (status: string) => {
    const translatedStatus = ['PAGO', 'PENDENTE', 'ESTORNADO']

    switch (status) {
      case 'PAID':
        return translatedStatus[0]
      case 'PENDING':
        return translatedStatus[1]
      case 'REFUND':
        return translatedStatus[2]
      default:
        return 'PROCESSANDO'
    }
  }

  const setStatusTypeColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return (
          <Tag status="active" color="success">
            {setStatusType(status)}
          </Tag>
        )
      case 'PENDING':
        return (
          <Tag status="waiting" color="default">
            {setStatusType(status)}
          </Tag>
        )
      case 'REFUND':
        return (
          <Tag status="refunded" color="default">
            {setStatusType(status)}
          </Tag>
        )
      default:
        return (
          <Tag status="waiting" color="processing">
            {setStatusType(status)}
          </Tag>
        )
    }
  }

  const selectPaymentMethod = (method: number) => {
    const methods = ['Crédito', 'Boleto', 'Convite']
    return methods[method]
  }

  const selectInstallmentsValue = (installment: number) => {
    if (installment > 1) return `${installment}x`
    return '-'
  }
  const menu = (
    <MenuDropdown>
      <MenuDropdown.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </MenuDropdown.Item>
      <MenuDropdown.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </MenuDropdown.Item>
      <MenuDropdown.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </MenuDropdown.Item>
    </MenuDropdown>
  )
  const columns = [
    {
      title: 'ID Venda',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Cliente',
      dataIndex: 'lead_name',
      key: 'lead_name',
    },
    {
      title: 'Produto',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Valor líquido',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => {
        return amount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      },
    },
    {
      title: 'Status',
      key: 'payment_status',
      dataIndex: 'payment_status',
      render: (status: string) => <span>{setStatusTypeColor(status)}</span>,
    },
    {
      title: 'Método de pagamento',
      dataIndex: 'payment_method',
      key: 'payment_method',
      render: (method: number) => <span>{selectPaymentMethod(method)}</span>,
    },
    {
      title: 'Parcelas',
      dataIndex: 'number_installments',
      key: 'number_installments',
      render: (installment: number) => (
        <span>{selectInstallmentsValue(installment)}</span>
      ),
    },
    {
      title: 'Opções',
      key: 'options',
      render: (text: string, record: any) => (
        <Space size="middle">
          <TableDropdownButton overlay={menu}>
            <FaEllipsisV />
          </TableDropdownButton>
        </Space>
      ),
    },
  ]

  function showTotal(total: any, range: any) {
    return (
      <div>
        <p>
          Mostrando:{' '}
          <span>
            {range[0]}-{range[1]}
          </span>{' '}
          de <span>{total}</span> resultados
        </p>
      </div>
    )
  }

  const handleChange = ({ current, pageSize }: any) => {
    setPageSize(pageSize)
    setPageIndex(current - 1)
    mutate()
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

  const filteredTable = () => {
    return (
      <div>
        <Table
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={dataTable?.records}
          pagination={{
            showTotal: showTotal,
            showSizeChanger: false,
            // pageSizeOptions: ["5", "10", "25", "50", "100"],
            pageSize: pageSize,
            current: pageIndex + 1,
            total: dataTable?.records.total_pages,
          }}
          onChange={pagination => handleChange(pagination)}
          // scroll={{ x: "calc(900px + 50%)" }}
        />
      </div>
    )
  }

  return filteredTable()
}

export default TableSells
