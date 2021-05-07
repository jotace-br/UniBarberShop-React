import { Line } from '@ant-design/charts';
import React from 'react';
import data from './graphData.json'

const LineGraph: React.FC = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   asyncFetch();
  // }, []);
  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data: data,
    autoFit: true,
    xField: 'month',
    yField: 'amount',
    seriesField: 'name',
    xAxis: {
      label: null,
      line: null,
      min: 0.4,
    },
    yAxis: {
      label: {
        style:{
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 12,
        },
        formatter: function formatter(v:any) {
          if (v<100){
            return v
          } else {
          return ''.concat(v, '+');
          }
        },
      },
      grid: {
        line:{
          style:{
            lineDash: [4.8, 7.2],
          }
        },
      }
    },
    smooth: true,
    lineStyle:{
      lineWidth: 6,
      strokeOpacity: 1,
      shadowColor: '#fff',
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      cursor: 'pointer',
    },
    legend: {
      position: 'top-left',
      itemSpacing: 30,
      marker: {
        symbol: 'circle',
        style: {
          fill: '#fff'
        }
      },
      itemName: {
        style:{
          fill: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontSize: 16
        }
      },
      style:{
        fill: "#fff",
      }
    }  as const,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 2000,
      },
    },
    color: ['#66FFE3', '#FEF756', '#A219CE'],
  };
 
  return <Line {...config} />;
}

export default LineGraph;