import { Area } from '@ant-design/charts';
import React, { useEffect, useState } from 'react';

const LineFillGraph: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const asyncFetch = () => {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    asyncFetch();
  }, []);

  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
  };
  return <Area {...config} />;
};

export default LineFillGraph;
