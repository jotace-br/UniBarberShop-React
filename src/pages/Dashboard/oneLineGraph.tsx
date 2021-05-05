import { Line } from '@ant-design/charts';
import React from 'react';

// import data from './graphData.json'

const OneLineGraph: React.FC = () => {
  var data = [
    {
      month: 'Janeiro',
      amount: 16,
      line: 'Vendas',
    },
    {
      month: 'Fevereiro',
      amount: 78,
      line: 'Vendas',
    },
    {
      month: 'Março',
      amount: 35,
      line: 'Vendas',
    },
    {
      month: 'Abril',
      amount: 128,
      line: 'Vendas',
    },
  ];
  const config = {
    data: data,
    xField: 'month',
    yField: 'amount',
    lineStyle:{
      lineWidth: 6,
      stroke: '#F28792',
      shadowColor: '#F28792',
      shadowBlur: 10,
    },
    smooth: true,
    point: {
      size: 15,
      shape: 'circle',
      style: {
        fill: 'transparent',
        stroke: 'transparent',
        lineWidth: 15,
      },
      interactions: [{ type: 'element-active' }],
      state: {
        // 设置 active 激活状态的样式
        active: {
          size: 15,
          animate: { duration: 5000, easing: 'easeLinear' },
          style: {
            lineWidth: 2,
            fill: '#e4c96a',
            stroke: '#E6BE27',
          },
        },
      }
    },
    tooltip: { 
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  // data: data,
  //   xField: 'year',
  //   yField: 'value',
  //   label: {},
  //   point: {
  //     size: 5,
  //     shape: 'diamond',
  //     style: {
  //       fill: 'white',
  //       stroke: '#5B8FF9',
  //       lineWidth: 2,
  //     },
  //   },
  //   tooltip: { showMarkers: false },
  //   state: {
  //     active: {
  //       style: {
  //         shadowColor: 'yellow',
  //         shadowBlur: 4,
  //         stroke: 'transparent',
  //         fill: 'red',
  //       },
  //     },
  //   },
  //   theme: {
  //     geometries: {
  //       point: {
  //         diamond: {
  //           active: {
  //             style: {
  //               shadowColor: '#FCEBB9',
  //               shadowBlur: 2,
  //               stroke: '#F6BD16',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   interactions: [{ type: 'marker-active' }],
 
  return <Line {...config} />;
}

export default OneLineGraph;