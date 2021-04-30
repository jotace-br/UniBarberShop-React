
import React from 'react';
import { Card, CardTitle, CardSubTitle } from '../../components/Card';

const Dashboard: React.FC = () => {
  return(
    <>
    <Card>  
     <CardTitle>Métodos de pagamento</CardTitle>
     <CardSubTitle>Índice dos métodos de pagamentos mais utilizados</CardSubTitle>
    </Card>
    </>
  );
}

export default Dashboard;