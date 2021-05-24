import { DualAxes as AntdDualAxes } from '@ant-design/charts'
import React from 'react'

const DualAxes: React.FC = () => {
  var uvData = [
    {
      time: '2019-03',
      value: 95,
    },
    {
      time: '2019-04',
      value: 90,
    },
    {
      time: '2019-05',
      value: 30,
    },
    {
      time: '2019-06',
      value: 45,
    },
    {
      time: '2019-07',
      value: 47,
    },
  ]
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'Pagas',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'Pagas',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'Pagas',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'Pagas',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'Pagas',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'Pendentes',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'Pendentes',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'Pendentes',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'Pendentes',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'Pendentes',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'Canceladas',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'Canceladas',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'Canceladas',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'Canceladas',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'Canceladas',
    },
  ]
  var config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    yAxis: {
      value: {
        grid: {
          line: {
            style: {
              lineDash: [4.8, 7.2],
            },
          },
        },
      },
    },
    limitInPlot: false,
    padding: [20, 20, 50, 20],
    meta: {
      time: {
        sync: false,
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
        columnWidthRatio: 0.4,
        columnStyle: {
          fill: '#7C44A8',
          shadowColor: 'rgba(124,68,168)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
      },
      {
        geometry: 'line',
        seriesField: 'name',
        lineStyle: (data: any, fill: any) => {
          console.log(data, fill)
        },
        color: ['#E04AED', '#51D5FF', '#FEF756'],
      },
    ],
    legend: {
      itemName: {
        style: {
          fill: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 16,
        },
      },
      style: {
        fill: '#fff',
      },
    } as const,
  }
  return <AntdDualAxes {...config} />
}

export default DualAxes
