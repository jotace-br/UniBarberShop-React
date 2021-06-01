import React, { useState } from 'react'

import { useFetch } from '../../../hooks/useFetch'
import { useUser } from '../../../services/user'

import moment from 'moment'

import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '../../../components/Card'

import TableSells from './table_sells'
import DualAxes from './graphs/DualAxesGraph'
import LineFillGraph from './graphs/LineFillGraph'
import ProgressBar from './graphs/ProgressBar'

import Select from '../../../components/Select'
import SmallCard from '../../../components/SmallCards'
import { SmallCardContainer } from '../../../components/SmallCards/style'

import { ExportContainer } from '../../Dashboard/style'

import {
  StatusLabel,
  StatusList,
  StatusListItem,
  StatusValue,
  TwoCardContainer,
} from './style'

import { MdBlock, MdLoop } from 'react-icons/md'
import { AccountBalanceWalletOutlined } from '@material-ui/icons'
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaEquals,
  FaDollarSign,
  FaExclamation,
} from 'react-icons/fa'

// import { Container } from './styles';
const { Option } = Select
const Sells: React.FC = () => {
  const [rangePickerDates] = useState<any>([
    moment(moment().add(-1, 'months'), 'DD/MM/YY').toDate().toDateString(),
    moment(moment(), 'DD/MM/YY').toDate().toDateString(),
  ])

  // All sells cards (Saldo disponível, saldo a receber, total de transações)
  const {
    data: { user },
  } = useUser()
  const { data: financialResume } = useFetch('/financial-summary')
  const { data: balance } = useFetch(`/check-balance/${user?.seller_id}`, [
    {
      shouldRetryOnError: false,
    },
  ])

  //Payment methods
  const { data: paymentPercentages } = useFetch(
    `/charts/sales/payment-method/${rangePickerDates[0]}/${rangePickerDates[1]}`,
  )

  // Status per sell
  const { data: sellsPerStatuses } = useFetch(
    `charts/sales/by-status/${rangePickerDates[0]}/${rangePickerDates[1]}`,
  )

  // Transactions per period
  // Sells per period

  const { data: salesPerPeriod } = useFetch(
    `charts/sales/per-period/${rangePickerDates[0]}/${rangePickerDates[1]}`,
  )

  const handleStatusPerSellGrowth = (variant: number, amount: number) => {
    switch (variant) {
      case 1:
        return (
          <StatusValue color="#71E083">
            <p>
              {amount?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }) || 'R$ 0,00'}
            </p>
            <FaChevronUp />
          </StatusValue>
        )
      case -1:
        return (
          <StatusValue color="#FF7070">
            <p>
              {amount?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }) || 'R$ 0,00'}
            </p>
            <FaChevronDown />
          </StatusValue>
        )
      default:
        return (
          <StatusValue color="#A4A4A4">
            <p>
              {amount?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }) || 'R$ 0,00'}
            </p>
            <FaEquals />
          </StatusValue>
        )
    }
  }

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
          label="Saldo disponível"
          icon={<FaDollarSign />}
        />
        <SmallCard
          color="#7197E0"
          value={
            balance?.balance.account_balance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) || 'R$ 0,00'
          }
          label="Saldo a receber"
          icon={<AccountBalanceWalletOutlined />}
        />
        <SmallCard
          color="#E6BE27"
          value={financialResume?.financial_summary.sales || 'R$ 0,00'}
          label="Total de transações"
          icon={<FaDollarSign />}
        />
      </SmallCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Transações por período</CardTitle>
            <CardSubTitle>
              Indicadores das transações por período selecionado
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <DualAxes />
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
            <ProgressBar data={paymentPercentages} />
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
              <CardTitle>Vendas por status</CardTitle>
              <CardSubTitle>Visão geral</CardSubTitle>
            </div>
            <div />
          </CardHeader>
          <CardContent>
            <StatusList>
              {/* aprovado */}
              <StatusListItem>
                <StatusLabel color="#71E083">
                  <FaCheck />
                  <p>Aprovado</p>
                </StatusLabel>
                {handleStatusPerSellGrowth(
                  sellsPerStatuses?.paid.variant,
                  sellsPerStatuses?.paid.amount,
                )}
              </StatusListItem>

              {/* não aprovado */}
              <StatusListItem>
                <StatusLabel color="#FF7070">
                  <FaExclamation />
                  <p>Expirado</p>
                </StatusLabel>
                {handleStatusPerSellGrowth(
                  sellsPerStatuses?.expired.variant,
                  sellsPerStatuses?.expired.amount,
                )}
              </StatusListItem>

              {/* cancelados */}
              <StatusListItem>
                <StatusLabel color="#A4A4A4">
                  <MdBlock />
                  <p>Estornado</p>
                </StatusLabel>
                {handleStatusPerSellGrowth(
                  sellsPerStatuses?.refund.variant,
                  sellsPerStatuses?.refund.amount,
                )}
              </StatusListItem>

              {/* pendente */}
              <StatusListItem>
                <StatusLabel color="#D6C52E">
                  <MdLoop />
                  <p>Pendente</p>
                </StatusLabel>
                {handleStatusPerSellGrowth(
                  sellsPerStatuses?.pending.variant,
                  sellsPerStatuses?.pending.amount,
                )}
              </StatusListItem>
            </StatusList>
          </CardContent>
        </Card>
      </TwoCardContainer>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Vendas por período</CardTitle>
            <CardSubTitle>
              Indicadores das vendas por período selecionado
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <LineFillGraph data={salesPerPeriod} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Listagem de vendas únicas</CardTitle>
            <CardSubTitle>
              Acompanhe os detalhes das suas vendas e dados financeiros
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <TableSells />
        </CardContent>
      </Card>
    </>
  )
}

export default Sells
