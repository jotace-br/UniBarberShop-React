import React from 'react';
import { Column } from '@ant-design/charts';

const BarGraph: React.FC = () => {
  var data = [
    {
      country: 'Todos',
      year: "Produtos",
      value: 40,
    },
    {
      country: 'Ativos',
      year: "Produtos",
      value: 22,
    },
    {
      country: 'Inativos',
      year: "Produtos",
      value: 5,
    },
  ];
  var config = {
    data: data,
    xAxis: false,
    yAxis: {
      grid:{
        line:{
          style:{
            lineDash: [30, 99999999],
            lineWidth: 1
          }
        }
      }
    },
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
   
    label: false,
    height: 224,
    autoFit: true,
    columnBackground: {
      style: {
        fill: '#000',
        fillOpacity: 0.25,
      }
    },
    columnStyle:{
      shadowColor: 'rgba(120,54,172,0.5)',
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      borderRadius: 5
    },
    legend: {
      itemWidth: 200,
      position: 'left',
      layout: 'vertical',
      itemSpacing: 30,
      background:{
        style:{
          fill: 'transparent',
          stroke: 'transparent',
        }
      },
      marker: {
        symbol: 'circle',
      },
      itemName: {
        style:{
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 16
        }
      },
    } as const,
    // paddingX: 190,
    color: ['#C284F3', '#7836AC', '#571D85'],
  };
  return <Column {...config} />;
};

export default BarGraph;