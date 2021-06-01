import React from 'react'
import { Area } from '@ant-design/charts'

interface GraphProps {
  data: any
}

const LineFillGraph: React.FC<GraphProps> = ({ data }) => {
  const getData = () => {
    const rows: any = []

    data?.forEach((data: any) => {
      const convertToDate = new Date(data.date).toLocaleString('us', {
        dateStyle: 'short',
      })

      rows.push({
        date: convertToDate,
        amount: Number(data.amount),
      })
    })

    return rows
  }

  var config = {
    data: getData(),
    xField: 'date',
    yField: 'amount',
    xAxis: { tickCount: 5 },
    yAxis: {
      grid: {
        line: {
          style: {
            lineDash: [4.8, 7.2],
          },
        },
      },
    },
    smooth: true,
    line: {
      color: '#45A3C0',
    },
    areaStyle: {
      fill: 'l(270) 0:#1C485600 0.2:#1C485629 0.8:#32798F67 1:#45A3C0',
      fillOpacity: 1,
    },
  }
  return <Area {...config} />
}

export default LineFillGraph
