import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/charts'

const DemoLine: React.FC = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    asyncFetch()
  }, [])
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error)
      })
  }
  var COLOR_PLATE_10 = ['#51D5FF', '#FEF756', '#E04AED']

  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v: any) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',')
          })
        },
      },
    },
    color: COLOR_PLATE_10,
    point: {
      shape: function shape(_ref: any) {
        var category = _ref.category
        return category === 'Gas fuel' ? 'square' : 'circle'
      },
      style: function style(_ref2: any) {
        var year = _ref2.year
        return { r: Number(year) % 4 ? 0 : 3 }
      },
    },
  }
  return <Line {...config} />
}

export default DemoLine
