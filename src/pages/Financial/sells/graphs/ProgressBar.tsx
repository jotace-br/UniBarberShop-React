import { Bar } from "@ant-design/charts";
import React from "react";

const DemoBar: React.FC = () => {
  var data = [
    {
      year: "Cartão de crédito",
      value: 38,
    },
    {
      year: "Boleto",
      value: 52,
    },
  ];
  var config = {
    data: data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: { position: "top-left" } as const,
  };
  return <Bar {...config} />;
};

export default DemoBar;
