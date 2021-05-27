import React, { useEffect, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import { Line } from '@ant-design/charts'

interface LineGraphProps {
  rangePickerDate?: any
  isRangePickerOpen?: boolean
}

const LineGraph = ({ rangePickerDate, isRangePickerOpen }: LineGraphProps) => {
  let RPChoosenDate = rangePickerDate?.map((initialDate: any) => initialDate)

  // avoid causing an error on dashboard because user cleared the filter.
  if (RPChoosenDate === undefined) RPChoosenDate = []

  const initialRPValue = rangePickerDate
  const [allRangePickerDate, setAllRangePickerDate] = useState(initialRPValue)
  const [isDateReady, setIsDateReady] = useState(false)

  const { data: graphicData } = useFetch(
    `/charts/dashboard/financial/${
      isDateReady ? allRangePickerDate[0] : RPChoosenDate[0]
    }/${isDateReady ? allRangePickerDate[1] : RPChoosenDate[1]}`,
  )

  useEffect(() => {
    const filterByGivenDate = () => {
      if (!isRangePickerOpen && rangePickerDate?.length !== 0) {
        setAllRangePickerDate(rangePickerDate?.map((date: any) => date))
        setIsDateReady(true)
      }
      setIsDateReady(false)
    }

    filterByGivenDate()
  }, [isRangePickerOpen, rangePickerDate])

  if (!graphicData) return <p>Nenhum método de pagamento disponível.</p>

  const getData = () => {
    const rows: any = []

    graphicData?.forEach((data: any) => {
      const convertToDate = new Date(
        data.year,
        data.month - 1,
        data.day,
      ).toLocaleString('us', { dateStyle: 'short' })

      rows.push({
        name: data.name,
        date: convertToDate,
        amount: data.amount,
      })
    })

    return rows
  }

  const config = {
    data: getData(),
    autoFit: true,
    xField: 'date',
    yField: 'amount',
    seriesField: 'name',
    xAxis: {
      label: {
        style: {
          fill: '#aaa',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 12,
        },
        formatter: function formatter(v: any) {
          return v
        },
      },
      grid: {
        line: {
          style: {
            stroke: 'transparent',
            cursor: 'pointer',
          },
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 12,
        },
        formatter: function formatter(v: any) {
          if (v < 100) {
            return v
          } else {
            return ''.concat(v, '+')
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
    lineStyle: ({ name }: any) => {
      const props = {
        lineWidth: 6,
        strokeOpacity: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        cursor: 'pointer',
      }

      switch (name) {
        case 'Boleto':
          return {
            stroke: '#66FFE3',
            shadowColor: '#66FFE3',
            ...props,
          }
        case 'Cartão de Crédito':
          return {
            stroke: '#FEF756',
            shadowColor: '#FEF756',
            ...props,
          }
        default:
          return {
            stroke: '#' + Math.floor(Math.random() * 16777215).toString(16),
            shadowColor:
              '#' + Math.floor(Math.random() * 16777215).toString(16),
            ...props,
          }
      }
    },
    tooltip: {
      formatter: ({ name, amount }: any) => {
        return { name: name, value: amount }
      },
    },
    legend: {
      position: 'top-left',
      itemSpacing: 30,
      marker: {
        symbol: 'circle',
      },
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
    animation: {
      appear: {
        animation: 'path-in',
        duration: 2000,
      },
    },
    colorField: 'type',
    color: ({ name }: any) => {
      switch (name) {
        case 'Boleto':
          return '#66FFE3'
        case 'Cartão de Crédito':
          return '#FEF756'
        default:
          return '#' + Math.floor(Math.random() * 16777215).toString(16)
      }
    },
  }

  return <Line {...config} />
}

export default LineGraph
