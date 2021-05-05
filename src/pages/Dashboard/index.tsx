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

import { Line } from '@ant-design/charts';

const { Option } = Select;

function gera_cor(){
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++ ) {
  //E concatena à variável cor
      cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

const Dashboard: React.FC = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   asyncFetch();
  // }, []);
  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const data = [
    {
      "name": "Cartão de crédito",
      "year": "1",
      "gdp": 0
    },
    {
      "name": "Cartão de crédito",
      "year": "2",
      "gdp": 34
    },
    {
      "name": "Cartão de crédito",
      "year": "3",
      "gdp": 100
    },
    {
      "name": "Boleto",
      "year": "1",
      "gdp": 46
    },
    {
      "name": "Boleto",
      "year": "2",
      "gdp": 83
    },
    {
      "name": "Boleto",
      "year": "3",
      "gdp": 21
    },
    {
      "name": "PIX",
      "year": "1",
      "gdp": 24
    },
    {
      "name": "PIX",
      "year": "2",
      "gdp": 12
    },
    {
      "name": "PIX",
      "year": "3",
      "gdp": 56
    },

  ];

  const config = {
    data: data,
    autoFit: true,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      label: null,
      line: null,
    },
    yAxis: {
      label: {
        style:{
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 12,
        },
        formatter: function formatter(v:any) {
          if (v<100){
            return v
          } else {
          return ''.concat(v, '+');
          }
        },
      },
      grid: {
        line:{
          style:{
            lineDash: [4.8, 7.2],
          }
        },
      }
    },
    smooth: true,
    lineStyle:{
      lineWidth: 6,
      strokeOpacity: 1,
      shadowColor: '#fff',
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      cursor: 'pointer',
    },
    
    legend: {
      position: 'top-left',
      itemSpacing: 30,
      marker: {
        symbol: 'circle',
        style: {
          fill: '#fff'
        }
      },
      itemName: {
        style:{
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 16
        }
      },
      style:{
        fill: "#fff",
      }
    }  as const,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    color: ['#66FFE3', '#FEF756', '#A219CE'],
  };
 
  let chart;
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
          <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
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
