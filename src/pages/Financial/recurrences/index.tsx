import React from 'react'

import { useFetch } from 'hooks/useFetch'
import { useUser } from 'services/user'

import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from 'components/Card'

import TableRecurrences from './table_recurrences'
import ColumnBarRecurrences from './graphs/ColumnBarRecurrences'
import Select from 'components/Select'
import SmallCard from 'components/SmallCards'
import { SmallCardContainer } from 'components/SmallCards/style'

import { ExportContainer } from 'pages/Dashboard/style'

import {
  StatusLabel,
  StatusList,
  StatusListItem,
  StatusValue,
  TwoCardContainer,
} from './style'

import { MdBlock, MdLock, MdLoop, MdTimer } from 'react-icons/md'
import {
  FaChartBar,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaExclamation,
} from 'react-icons/fa'
import { IoMdCash } from 'react-icons/io'

// import { Container } from './styles';
const { Option } = Select
const Recurrences: React.FC = () => {
  const {
    data: { user },
  } = useUser()
  const { data: financialResume } = useFetch('/financial-summary')
  const { data: balance } = useFetch(`/check-balance/${user.seller_id}`, [
    {
      shouldRetryOnError: false,
    },
  ])

  return (
    <>
      <SmallCardContainer>
        <SmallCard
          color="#71E083"
          value={
            financialResume?.financial_summary.net_value.toLocaleString(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL',
              },
            ) || 'R$ 0,00'
          }
          label="MRR - Receita mensal"
          icon={<IoMdCash />}
        />
        <SmallCard
          color="#F9C96E"
          value={
            balance?.balance.account_balance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) || 'R$ 0,00'
          }
          label="Churn - Taxa de rotatividade"
          icon={<FaChartBar />}
        />
        <SmallCard
          color="#FF7070 "
          value={financialResume?.financial_summary.sales || 'R$ 0,00'}
          label="Cancelamentos"
          icon={<MdBlock />}
        />
      </SmallCardContainer>
      <TwoCardContainer>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Métodos de pagamento</CardTitle>
              <CardSubTitle>
                Índice dos métodos de pagamentos mais utilizados
              </CardSubTitle>
            </div>
            <div />
          </CardHeader>
          <CardContent>
            <ColumnBarRecurrences />
          </CardContent>
          <ExportContainer>
            <p>Exportar em:</p>
            <Select defaultValue={'pdf'}>
              <Option value="pdf">PDF</Option>
              <Option value="excel">XLS</Option>
              <Option value="excel">DOC.X</Option>
              <Option value="odf">TXT</Option>
            </Select>
          </ExportContainer>
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Status</CardTitle>
              <CardSubTitle>Visão geral</CardSubTitle>
            </div>
            <div />
          </CardHeader>
          <CardContent>
            <StatusList>
              {/* pagos */}
              <StatusListItem>
                <StatusLabel color="#71E083">
                  <FaCheck />
                  <p>Pagos</p>
                </StatusLabel>
                <StatusValue color="#71E083">
                  <p>R$12.000,00</p>
                  <FaChevronUp />
                </StatusValue>
              </StatusListItem>
              {/* pendente */}
              <StatusListItem>
                <StatusLabel color="#D6C52E">
                  <MdLoop />
                  <p>Pendentes</p>
                </StatusLabel>
                <StatusValue color="#71E083">
                  <p>R$12.000,00</p>
                  <FaChevronUp />
                </StatusValue>
              </StatusListItem>
              {/* atrasados */}
              <StatusListItem>
                <StatusLabel color="#E8A94C">
                  <MdTimer />
                  <p>Atrasados</p>
                </StatusLabel>
                <StatusValue color="#FF7070">
                  <p>R$12.000,00</p>
                  <FaChevronDown />
                </StatusValue>
              </StatusListItem>
              {/* Suspensos */}
              <StatusListItem>
                <StatusLabel color="#EDD168">
                  <MdLock />
                  <p>Suspensos</p>
                </StatusLabel>
                <StatusValue color="#71E083">
                  <p>R$12.000,00</p>
                  <FaChevronUp />
                </StatusValue>
              </StatusListItem>
              {/* cancelados */}
              <StatusListItem>
                <StatusLabel color="#A4A4A4">
                  <MdBlock />
                  <p>Cancelados</p>
                </StatusLabel>
                <StatusValue color="#FF7070">
                  <p>R$12.000,00</p>
                  <FaChevronDown />
                </StatusValue>
              </StatusListItem>

              {/* Falha */}
              <StatusListItem>
                <StatusLabel color="#FF7070">
                  <FaExclamation />
                  <p>Falha</p>
                </StatusLabel>
                <StatusValue color="#71E083">
                  <p>R$12.000,00</p>
                  <FaChevronUp />
                </StatusValue>
              </StatusListItem>
            </StatusList>
          </CardContent>
        </Card>
      </TwoCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Listagem de recorrências</CardTitle>
            <CardSubTitle>
              Acompanhe os detalhes das assinaturas de seus planos
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <TableRecurrences />
        </CardContent>
      </Card>
    </>
  )
}

export default Recurrences
