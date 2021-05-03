import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import {
  Card,
  CardTitle,
  CardSubTitle,
  CardHeader,
  CardContent,
} from "../../components/Card";
import { Rangepicker } from "../../components/Datepicker";
import Select from "../../components/Select";
import { FilterContainer, ExportContainer, TwoCardContainer } from "./style";
import { Line } from "react-chartjs-2";
const { Option } = Select;

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132)",
    },
  ],
};

const options = {
  color: "#fff",
  elements: {
    point: {
      radius: 0,
    },
    line: {
      shadowColor: "#E56590",
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      tension: 0.3,
      borderWidth: 6,
    },
    stroke: {
      shadowColor: "#E56590",
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 4,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

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
          <FaEllipsisV />
        </CardHeader>
        <CardContent>
          <Line type="line" options={options} data={data} />
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
          <FaEllipsisV />
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
          <FaEllipsisV />
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

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Afiliados</CardTitle>
            <CardSubTitle>Visão geral dos seus afiliados</CardSubTitle>
          </div>
          <FaEllipsisV />
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
