import React from 'react'

import Table from './table'
import { TabCard, TabsPane } from 'components/Tabs'

const TableSells: React.FC = () => {
  return (
    <TabCard>
      <TabsPane tab="Ativos" key="1">
        <Table filter="" />
      </TabsPane>
      <TabsPane tab="Aprovados" key="2">
        <Table filter="PAID" />
      </TabsPane>
      <TabsPane tab="Pendentes" key="4">
        <Table filter="PENDING" />
      </TabsPane>
      <TabsPane tab="Estornadas" key="5">
        <Table filter="REFUND" />
      </TabsPane>
    </TabCard>
  )
}

export default TableSells
