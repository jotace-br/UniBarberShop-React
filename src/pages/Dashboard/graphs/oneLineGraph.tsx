import { Line } from "@ant-design/charts";
import React from "react";
import { useFetch } from "../../../hooks/useFetch";

const OneLineGraph: React.FC = () => {
  const firstDayOfTheYear = new Date(
    new Date().getFullYear(),
    0,
    1
  ).toDateString();

  const currentDate = new Date().toDateString();

  const { data: salesData } = useFetch(
    `/financial-chart-sales/${firstDayOfTheYear}/${currentDate}`
  );

  if (!salesData) return <p>Carregando visão geral de vendas...</p>;

  const getData = () => {
    // bug aqui ao receber o data, resolverei segunda
    const data = [
      {
        month: 1,
        amount: 12,
      },
      {
        month: 2,
        amount: 123,
      },
      {
        month: 3,
        amount: 1234,
      },
      {
        month: 4,
        amount: 12345,
      },
      {
        month: 5,
        amount: 123456,
      },
    ];
    return data;
  };

  const config = {
    data: getData(),
    xField: "month",
    yField: "amount",
    width: 500,
    height: 224,
    autoFit: true,
    lineStyle: {
      lineWidth: 6,
      stroke: "#F28792",
      shadowColor: "#F28792",
      shadowBlur: 10,
    },
    smooth: true,
    point: {
      size: 8,
      shape: "circle",
      style: {
        fill: "transparent",
        stroke: "transparent",
        lineWidth: 15,
      },
      interactions: [{ type: "element-active" }],
      state: {
        active: {
          size: 2,
          animate: { duration: 5000, easing: "easeLinear" },
          style: {
            lineWidth: 2,
            fill: "#e4c96a",
            stroke: "#E6BE27",
          },
        },
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowColor: "yellow",
          shadowBlur: 4,
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: "#FCEBB9",
                shadowBlur: 2,
                stroke: "#F6BD16",
              },
            },
          },
        },
      },
    },
    interactions: [{ type: "marker-active" }],
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
};

export default OneLineGraph;
