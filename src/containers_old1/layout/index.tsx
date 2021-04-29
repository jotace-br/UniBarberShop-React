import React from 'react';
import Sidebar from './Sidebar';
import { Layout } from 'antd';

const { Content } = Layout;



// import { Container } from './styles';
interface Props {
  children?: unknown
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;