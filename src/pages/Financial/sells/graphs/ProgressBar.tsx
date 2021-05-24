import { Progress } from 'antd'
import React from 'react'
import { ContainerBar, WrapperProgress } from './style'

const DemoBar: React.FC = () => {
  return (
    <WrapperProgress>
      <ContainerBar>
        <p>Cartão de crédito</p>
        <Progress percent={75} status="active" />
      </ContainerBar>
      <ContainerBar>
        <p>Boleto</p>
        <Progress percent={25} status="active" />
      </ContainerBar>
    </WrapperProgress>
  )
}

export default DemoBar
