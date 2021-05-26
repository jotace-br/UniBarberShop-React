import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from 'components/Card'

import TableProducts from './table_products'
import DualAxes from './graphs/DualAxesGraph'

import Select from 'components/Select'
import SmallCard from 'components/SmallCards'
import { SmallCardContainer } from 'components/SmallCards/style'

import { ExportContainer, FilterContainer } from './style'

import { FaRegCheckCircle, FaRegTrashAlt } from 'react-icons/fa'
import { MdBlock } from 'react-icons/md'
import { Rangepicker } from 'components/Datepicker'

// import { Container } from './styles';
const { Option } = Select
const ProductsResume: React.FC = () => {
  return (
    <>
      <SmallCardContainer>
        <SmallCard
          color="#71E083"
          value={15}
          label="Produtos ativos"
          icon={<FaRegCheckCircle />}
          progress={50}
        />
        <SmallCard
          color="#A4A4A4"
          value={5}
          label="Produtos inativos"
          icon={<MdBlock />}
          progress={25}
        />
        <SmallCard
          color="#FF7070"
          value={5}
          label="Produtos excluídos"
          icon={<FaRegTrashAlt />}
          progress={25}
        />
      </SmallCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Produtos mais vendidos</CardTitle>
            <CardSubTitle>
              Indicadores de seus produtos com maiores índices de venda
            </CardSubTitle>
          </div>
          <div />
          <FilterContainer>
            <p>Fitrar:</p>
            <Rangepicker />
          </FilterContainer>
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
          <TableProducts />
        </CardContent>
      </Card>
    </>
  )
}

export default ProductsResume
