import { DualAxes as AntdDualAxes } from "@ant-design/charts";
import React from "react";

const DualAxes: React.FC = () => {
  var uvData = [
    {
      time: "2019-03",
      value: 95,
    },
    {
      time: "2019-04",
      value: 90,
    },
    {
      time: "2019-05",
      value: 30,
    },
    {
      time: "2019-06",
      value: 45,
    },
    {
      time: "2019-07",
      value: 47,
    },
  ];
  var transformData = [
    {
      time: "2019-03",
      count: 800,
      name: "a",
    },
    {
      time: "2019-04",
      count: 600,
      name: "a",
    },
    {
      time: "2019-05",
      count: 400,
      name: "a",
    },
    {
      time: "2019-06",
      count: 380,
      name: "a",
    },
    {
      time: "2019-07",
      count: 220,
      name: "a",
    },
    {
      time: "2019-03",
      count: 750,
      name: "b",
    },
    {
      time: "2019-04",
      count: 650,
      name: "b",
    },
    {
      time: "2019-05",
      count: 450,
      name: "b",
    },
    {
      time: "2019-06",
      count: 400,
      name: "b",
    },
    {
      time: "2019-07",
      count: 320,
      name: "b",
    },
    {
      time: "2019-03",
      count: 900,
      name: "c",
    },
    {
      time: "2019-04",
      count: 600,
      name: "c",
    },
    {
      time: "2019-05",
      count: 450,
      name: "c",
    },
    {
      time: "2019-06",
      count: 300,
      name: "c",
    },
    {
      time: "2019-07",
      count: 200,
      name: "c",
    },
  ];
  var config = {
    data: [uvData, transformData],
    xField: "time",
    yField: ["value", "count"],
    limitInPlot: false,
    padding: [20, 20, 50, 20],
    meta: {
      time: {
        sync: false,
      },
    },
    geometryOptions: [
      {
        geometry: "column",
        columnWidthRatio: 0.4,
      },
      {
        geometry: "line",
        seriesField: "name",
      },
    ],
    legend: {
      itemName: {
        style: {
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 16,
        },
      },
      style: {
        fill: "#fff",
      },
    } as const,
  };
  return <AntdDualAxes {...config} />;
};

export default DualAxes;
