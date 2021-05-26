import React, { useEffect, useState } from 'react'
import { Area } from '@ant-design/charts'

const LineFillGraph: React.FC = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const asyncFetch = () => {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
      )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
          console.log('fetch data failed', error)
        })
    }
    asyncFetch()
  }, [])

  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
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
