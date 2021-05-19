import { Menu, Space } from 'antd';
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import {
  ButtonDropdown,
  ButtonPrimary,
  MenuDropdown,
} from '../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '../../components/Card';
import Table, { TableButton } from '../../components/Table';
import { TabCard, TabsPane } from '../../components/Tabs';
import { Tag } from '../../components/Tag';

// import { Container } from './styles';

const Sells: React.FC = () => {
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
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'valor líquido',
      dataIndex: 'method',
      key: 'method',
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

  const menu = (
    <MenuDropdown>
      <Menu.Item key='1'>Download em PDF</Menu.Item>
      <Menu.Item key='2'>Download em XLS</Menu.Item>
      <Menu.Item key='3'>Download em DOC.X</Menu.Item>
      <Menu.Item key='4'>Download em TXT</Menu.Item>
    </MenuDropdown>
  );

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Listagem de vendas</CardTitle>
          <CardSubTitle>Acompanhe os detalhes de suas vendas</CardSubTitle>
        </div>
        <ButtonDropdown overlay={menu}>Gerar relatório</ButtonDropdown>
      </CardHeader>

      <CardContent>
        <TabCard>
          <TabsPane tab='Todas' key='1'>
            {isTableEmpty()}
          </TabsPane>
          <TabsPane tab='Finalizadas' key='2'>
            {isTableEmpty()}
          </TabsPane>
          <TabsPane tab='Pendentes' key='3'>
            {isTableEmpty()}
          </TabsPane>
          <TabsPane tab='Canceladas' key='4'>
            {isTableEmpty()}
          </TabsPane>
        </TabCard>
      </CardContent>
    </Card>
  );
};

export default Sells;
