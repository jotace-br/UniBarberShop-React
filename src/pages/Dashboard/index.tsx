import React from "react";
import { FaEllipsisV, FaChevronRight } from "react-icons/fa";
import {
  Card,
  CardTitle,
  CardSubTitle,
  CardHeader,
  CardContent,
  ActionsBtn,
} from "../../components/Card";
import { Rangepicker } from "../../components/Datepicker";
import Select from "../../components/Select";
import {
  FilterContainer,
  ExportContainer,
  TwoCardContainer,
  SmallCard,
  CardIcon,
  SmallCardText,
  SmallCardAction,
  SmallCardContainer
} from "./style";
import LineGraph from "./lineGraph";
import OneLineGraph from "./oneLineGraph";
import BarGraph from "./barGraph";
import { Icon } from "@iconify/react";
import cartArrowDown from "@iconify/icons-mdi/cart-arrow-down";
import currencyUsd from '@iconify/icons-mdi/currency-usd';
import walletOutline from '@iconify/icons-mdi/wallet-outline';

const { Option } = Select;

const Dashboard: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Métodos de pagamento</CardTitle>
            <CardSubTitle>
              Índice dos métodos de pagamentos mais utilizados
            </CardSubTitle>
          </div>
          <div />
          <FilterContainer>
            <p>Fitrar:</p>
            <Rangepicker />
          </FilterContainer>
          <ActionsBtn>
            <FaEllipsisV />
          </ActionsBtn>
        </CardHeader>
        <CardContent>
          {/* <Line type="line" options={options} data={data} /> */}
          <LineGraph />
        </CardContent>
        <ExportContainer>
          <p>Exportar em:</p>
          <Select defaultValue={"pdf"}>
            <Option value="pdf">PDF</Option>
            <Option value="excel">XLS</Option>
            <Option value="excel">DOC.X</Option>
            <Option value="odf">TXT</Option>
          </Select>
        </ExportContainer>
      </Card>

      {/* card vendas */}

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Vendas</CardTitle>
            <CardSubTitle>Visão geral de suas vendas</CardSubTitle>
          </div>
          <ActionsBtn>
            <FaEllipsisV />
          </ActionsBtn>
        </CardHeader>
        <CardContent>
          <SmallCardContainer>
            <SmallCard>
              <CardIcon color="#F9C96E">
                <Icon icon={cartArrowDown} />
              </CardIcon>
              <SmallCardText>
                <p>562</p>
                <p>Vendas efetuadas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#71E083">
                <Icon icon={currencyUsd} />
              </CardIcon>
              <SmallCardText>
                <p>562</p>
                <p>Vendas efetuadas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#7197E0">
                <Icon icon={walletOutline} />
              </CardIcon>
              <SmallCardText>
                <p>562</p>
                <p>Vendas efetuadas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
          </SmallCardContainer>
        </CardContent>
      </Card>
      <TwoCardContainer>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Produtos</CardTitle>
              <CardSubTitle>Visão geral dos seus produtos</CardSubTitle>
            </div>
            <ActionsBtn>
              <FaEllipsisV />
            </ActionsBtn>
          </CardHeader>
          <CardContent>
            <BarGraph />
          </CardContent>
          <ExportContainer>
            <p>Exportar em:</p>
            <Select defaultValue={"pdf"}>
              <Option value="pdf">PDF</Option>
              <Option value="excel">Excel</Option>
              <Option value="odf">ODF</Option>
            </Select>
          </ExportContainer>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Afiliados</CardTitle>
              <CardSubTitle>Visão geral dos seus afiliados</CardSubTitle>
            </div>
            <ActionsBtn>
              <FaEllipsisV />
            </ActionsBtn>
          </CardHeader>
          <CardContent>
            <OneLineGraph />
          </CardContent>
          <ExportContainer>
            <p>Exportar em:</p>
            <Select defaultValue={"pdf"}>
              <Option value="pdf">PDF</Option>
              <Option value="excel">Excel</Option>
              <Option value="odf">ODF</Option>
            </Select>
          </ExportContainer>
        </Card>
      </TwoCardContainer>
    </>
  );
};

export default Dashboard;
