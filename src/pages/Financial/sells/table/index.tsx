import { Space } from 'antd';
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { ButtonPrimary } from '../../../../components/Button';
import Table, { TableButton } from '../../../../components/Table';
import { TabCard, TabsPane } from '../../../../components/Tabs';
import { Tag } from '../../../../components/Tag';

// import { Container } from './styles';

const TableSells: React.FC = () => {
  const [isDataAvailable] = useState(false);

  const columns = [
    {
      title: 'ID Venda',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
      render: (text: string) => {
        return ''.concat(text);
      },
    },
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Valor líquido',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: string) => (
        <span>
          <Tag
            status={status.includes('ATIVO') ? 'active' : 'error'}
            color={status.includes('ATIVO') ? 'sucess' : 'error'}
          >
            {status.toUpperCase()}
          </Tag>
        </span>
      ),
    },
    {
      title: 'Método de pagamento',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'Parcelas',
      dataIndex: 'installments',
      key: 'installments',
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
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
    },
    {
      key: '1',
      customer: 'Mussum Ipsum',
      method: 'POST',
      status: 'ATIVO',
      email: 'gabs@gabs.com',
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
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.endpoint === 'Disabled User', // Column configuration not to be checked
      endpoint: record.endpoint,
    }),
  };

  const isTableEmpty = () => {
    if (!isDataAvailable) {
      return (
        <div>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={data}
            pagination={{ showTotal: showTotal }}
            scroll={{ x: 'calc(700px + 50%)' }}
          />
        </div>
      );
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

          <ButtonPrimary>
            <p>Adicionar +</p>
          </ButtonPrimary>
        </div>
      );
    }
  };

  return (
    <TabCard>
      <TabsPane tab='Ativos' key='1'>
        {isTableEmpty()}
      </TabsPane>
      <TabsPane tab='Aprovados' key='1'>
        {isTableEmpty()}
      </TabsPane>
      <TabsPane tab='Não Aprovados' key='1'>
        {isTableEmpty()}
      </TabsPane>
      <TabsPane tab='Pendentes' key='1'>
        {isTableEmpty()}
      </TabsPane>
      <TabsPane tab='Canceladas' key='1'>
        {isTableEmpty()}
      </TabsPane>
    </TabCard>
  );
};

export default TableSells;
