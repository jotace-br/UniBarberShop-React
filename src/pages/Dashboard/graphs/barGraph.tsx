import React from "react";
import { Pie } from "@ant-design/charts";

const BarGraph: React.FC = () => {
  var data = [
    {
      country: "Produtos Ativos",
      value: 22,
    },
    {
      country: "Produtos Inativos",
      value: 5,
    },
  ];
  // var config = {
  //   data: data,
  //   xAxis: false,
  //   yAxis: {
  //     grid:{
  //       line:{
  //         style:{
  //           lineDash: [30, 99999999],
  //           lineWidth: 1
  //         }
  //       }
  //     }
  //   },
  //   xField: 'year',
  //   yField: 'value',
  //   seriesField: 'country',

  //   label: false,
  //   width: 500,
  //   height: 224,
  //   autoFit: true,
  //   columnStyle:{
  //     shadowColor: 'rgba(120,54,172,0.5)',
  //     shadowBlur: 10,
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //     borderRadius: 5
  //   },
  //   legend: {
  //     position: 'top-left',
  //     layout: 'horizontal',
  //     itemSpacing: 30,
  //     background:{
  //       style:{
  //         fill: 'transparent',
  //         stroke: 'transparent',
  //       }
  //     },
  //     marker: {
  //       symbol: 'circle',
  //     },
  //     itemName: {
  //       style:{
  //         fill: "#fff",
  //         fontFamily: "Poppins, sans-serif",
  //         fontSize: 16
  //       }
  //     },
  //   } as const,
  //   color: ['#C284F3', '#7836AC', '#571D85'],
  // };
  var config = {
    padding: 30,
    height: 224,
    autoFit: true,
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "country",
    radius: 1,
    innerRadius: 0.64,
    pieStyle: {
      lineWidth: 0,
      shadowBlur: 30,
      shadowColor: "#C284F3",
    },
    statistic: {
      content: {
        customHtml: (container: any, view: any, datum: any, data: any)=>{
          console.log(data)
          var total = 0;
          for (var i = 0; i< data.length; i++){
            total += data[i].value
          }
          console.log(total)
          return(
            "<h1>aaa</h1>"
          );
        }
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        opacity: 0.4,
        fill: "#000"
      },
      autoRotate: false,
      content: "{value}%",
    },
    legend: {
      position: 'right',
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
    interactions: [
      { type: "element-selected" },
      { type: "element-active" },
      { type: "pie-statistic-active" },
    ],
    color: ["#C284F3", "#7836AC"],
  };
  return <Pie {...config} />;
};

export default BarGraph;
