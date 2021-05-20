import React from "react";
import { TabCard, TabsPane } from "../../../../components/Tabs";
import Table from "./table";

// import { Container } from './styles';

const TableSells: React.FC = () => {
  return (
    <TabCard>
      <TabsPane tab="Ativos" key="1">
        <Table filter="ativos" />
      </TabsPane>
      <TabsPane tab="Aprovados" key="2">
        <Table filter="aprovados" />
      </TabsPane>
      <TabsPane tab="Não Aprovados" key="3">
        <Table filter="nao_aprovados" />
      </TabsPane>
      <TabsPane tab="Pendentes" key="4">
        <Table filter="pendentes" />
      </TabsPane>
      <TabsPane tab="Canceladas" key="5">
        <Table filter="canceladas" />
      </TabsPane>
    </TabCard>
  );
};

export default TableSells;
