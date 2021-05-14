import { Line } from "@ant-design/charts";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

interface LineGraphProps {
  rangePickerDate?: any;
  isRangePickerOpen?: boolean;
}

const LineGraph = ({ rangePickerDate, isRangePickerOpen }: LineGraphProps) => {
  const RPChoosenDate = [
    rangePickerDate[0]?._d.toDateString(),
    rangePickerDate[1]?._d.toDateString(),
  ];

  const initialRPValue = rangePickerDate;
  const [allRangePickerDate, setAllRangePickerDate] = useState(initialRPValue);
  const [isDateReady, setIsDateReady] = useState(false);

  const { data: graphicData } = useFetch(
    `/financial-chart/${
      isDateReady ? allRangePickerDate[0] : RPChoosenDate[0]
    }/${isDateReady ? allRangePickerDate[1] : RPChoosenDate[1]}`
  );

  useEffect(() => {
    const filterByGivenDate = () => {
      if (!isRangePickerOpen && rangePickerDate[1] !== undefined) {
        setAllRangePickerDate(
          rangePickerDate?.map((dates: any) => dates._d.toDateString())
        );
        setIsDateReady(true);
      }
      setIsDateReady(false);
    };

    filterByGivenDate();
  }, [isRangePickerOpen, rangePickerDate]);

  if (!graphicData) return <p>Carregando métodos de pagamento...</p>;

  const getData = () => {
    const rows: any = [];

    graphicData?.forEach((data: any) => {
      rows.push({
        name: data.name,
        day: `${data.day < 9 ? `0${data.day}` : data.day}-${
          data.month > 9 ? data.month : `0${data.month}`
        }`,
        amount: data.amount,
      });
    });

    return rows;
  };

  const config = {
    data: getData(),
    autoFit: true,
    xField: "day",
    yField: "amount",
    seriesField: "name",
    xAxis: {
      label: null,
      line: null,
      min: 0.4,
    },
    yAxis: {
      label: {
        style: {
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 12,
        },
        formatter: function formatter(v: any) {
          if (v < 100) {
            return v;
          } else {
            return "".concat(v, "+");
          }
        },
      },
      grid: {
        line: {
          style: {
            lineDash: [4.8, 7.2],
          },
        },
      },
    },
    smooth: true,
    lineStyle: (data: any) => {
      if (data.name === "Cartão de crédito") {
        return {
          stroke: "#66FFE3",
          lineWidth: 6,
          strokeOpacity: 1,
          shadowColor: "#66FFE3",
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          cursor: "pointer",
        };
      } else if (data.name === "Boleto") {
        return {
          stroke: "#FEF756",
          lineWidth: 6,
          strokeOpacity: 1,
          shadowColor: "#FEF756",
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          cursor: "pointer",
        };
      } else {
        return {
          stroke: "#fff",
          lineWidth: 6,
          strokeOpacity: 1,
          shadowColor: "#fff",
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          cursor: "pointer",
        };
      }
    },
    legend: {
      position: "top-left",
      itemSpacing: 30,
      marker: {
        symbol: "circle",
      },
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
    animation: {
      appear: {
        animation: "path-in",
        duration: 2000,
      },
    },
    colors: ["#66FFE3", "#FEF756"],
  };

  return <Line {...config} />;
};

export default LineGraph;
