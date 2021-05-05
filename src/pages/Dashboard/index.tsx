import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
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
import { FilterContainer, ExportContainer, TwoCardContainer } from "./style";
import LineGraph from './lineGraph'
import BarGraph from "./barGraph";

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
            <Option value="excel">Excel</Option>
            <Option value="odf">ODF</Option>
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
        <CardContent></CardContent>
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
          <CardContent></CardContent>
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
