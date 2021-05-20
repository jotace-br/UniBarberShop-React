import React, { useState } from 'react';

import { useFetch } from '../../../../hooks/useFetch';

import Table, { TableButton } from '../../../../components/Table';
import { TabCard, TabsPane } from '../../../../components/Tabs';

import { Space } from 'antd';

import { Tag } from '../../../../components/Tag';

import { FaEllipsisV } from 'react-icons/fa';

const TableSells: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [paymentFilter, setPaymentFilter] = useState('');

  const { data: dataTable, mutate } = useFetch(
    `/latest-sales?page_index=${pageIndex}&payment_status=${paymentFilter}`
  );

  // `/latest-sales?page_index=${pageIndex}&page_size=${pageSize}&payment_status=${paymentFilter}`;

  //`/latest-sales?orderColunm=${colunm}&order=${order}&page_index=${page}&page_size=${rowsPerPage}&produto=${produto}&costume=${comprador}&payment_method=${method}&payment_status=${status}&id=${id}`

  const setStatusType = (status: string) => {
    const translatedStatus = ['PAGO', 'PENDENTE', 'ESTORNADO', 'CANCELADO'];

    switch (status) {
      case 'PAID':
        return translatedStatus[0];
      case 'PENDING':
        return translatedStatus[1];
      case 'REFUND':
        return translatedStatus[2];
      case 'CANCELED':
        return translatedStatus[3];
      default:
        return 'PROCESSANDO';
    }
  };

  const setStatusTypeColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return (
          <Tag status='active' color='success'>
            {setStatusType(status)}
          </Tag>
        );
      case 'PENDING':
        return (
          <Tag status='waiting' color='default'>
            {setStatusType(status)}
          </Tag>
        );
      case 'REFUND':
        return (
          <Tag status='refunded' color='default'>
            {setStatusType(status)}
          </Tag>
        );
      case 'CANCELED':
        return (
          <Tag status='error' color='error'>
            {setStatusType(status)}
          </Tag>
        );
      default:
        return (
          <Tag status='waiting' color='processing'>
            {setStatusType(status)}
          </Tag>
        );
    }
  };

  const selectPaymentMethod = (method: number) => {
    const methods = ['Crédito', 'Boleto', 'Convite'];
    return methods[method];
  };

  const selectInstallmentsValue = (installment: number) => {
    if (installment > 1) return `${installment}x`;
    return '-';
  };

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
        });
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
        <Space size='middle'>
          <TableButton a='edit'>
            <FaEllipsisV />
          </TableButton>
        </Space>
      ),
    },
  ];

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
    );
  }

  const handleChange = ({ current, pageSize: pageSizeFC }: any) => {
    if (current !== pageIndex) {
      setPageIndex(current - 1);
      setLoading(true);
    }

    if (pageSizeFC !== pageSize) {
      setPageSize(pageSizeFC);
      setPageIndex(current - 1);

      setLoading(true);
    }

    mutate();
    setLoading(false);
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.endpoint === 'Disabled User', // Column configuration not to be checked
      endpoint: record.endpoint,
    }),
  };

  const filteredTable = () => {
    return (
      <div>
        <Table
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={dataTable?.records}
          pagination={{
            showTotal: showTotal,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25', '50', '100'],
            pageSize: pageSize,
            current: pageIndex + 1,
            total: dataTable?.records.total_pages,
          }}
          loading={loading}
          onChange={(pagination) => handleChange(pagination)}
          scroll={{ x: 'calc(700px + 50%)', y: 370 }}
        />
      </div>
    );
  };

  return (
    <TabCard defaultActiveKey='1'>
      <TabsPane tab='Todas' key='1'>
        {filteredTable()}
      </TabsPane>
      <TabsPane tab='Aprovadas' key='2'>
        <p>aprovados</p>
      </TabsPane>
      <TabsPane tab='Não Aprovadas' key='3'>
        <p>n aprovados</p>
      </TabsPane>
      <TabsPane tab='Pendentes' key='4'>
        <p>pendentes</p>
      </TabsPane>
      <TabsPane tab='Canceladas' key='5'>
        <p>canelados</p>
      </TabsPane>
    </TabCard>
  );
};

export default TableSells;
