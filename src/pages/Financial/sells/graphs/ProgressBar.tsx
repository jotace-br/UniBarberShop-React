import React from 'react'
import { Progress } from 'antd'
import { ContainerBar, WrapperProgress } from './style'

interface DemoBarProps {
  data: {
    billet: {
      amount: number
      name: string
      percent: number
    }
    card: {
      amount: number
      name: string
      percent: number
    }
    courtesy: {
      amount: number
      name: string
      percent: number
    }
  }
}

const DemoBar: React.FC<DemoBarProps> = ({ data }) => {
  return (
    <WrapperProgress>
      <ContainerBar>
        <p>Cartão de crédito</p>
        <Progress
          percent={Math.ceil(data?.billet?.percent) || 0}
          status="active"
        />
      </ContainerBar>
      <ContainerBar>
        <p>Boleto</p>
        <Progress
          percent={Math.ceil(data?.card?.percent) || 0}
          status="active"
        />
      </ContainerBar>
      <ContainerBar>
        <p>Cortesia</p>
        <Progress
          percent={Math.ceil(data?.courtesy?.percent) || 0}
          status="active"
        />
      </ContainerBar>
    </WrapperProgress>
  )
}

export default DemoBar
