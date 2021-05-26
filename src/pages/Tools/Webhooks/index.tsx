import React from 'react'
import { ButtonPrimary } from 'components/Button'
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from 'components/Card'
import { TabCard, TabsPane } from 'components/Tabs'
import TableWebhooks from './table'

const Webhooks: React.FC = () => {
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
            <TableWebhooks filter="Todos" />
          </TabsPane>
          <TabsPane tab="Ativos" key="2">
            <TableWebhooks filter="Ativos" />
          </TabsPane>
          <TabsPane tab="Falha" key="3">
            <TableWebhooks filter="Falha" />
          </TabsPane>
        </TabCard>
      </CardContent>
    </Card>
  )
}

export default Webhooks
