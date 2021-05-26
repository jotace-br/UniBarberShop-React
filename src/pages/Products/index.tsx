import React from 'react'

import ProductsResume from './resume'
import { IconTab, Tabs, TabsPane } from 'components/Tabs'

import { MdAttachMoney, MdMonetizationOn } from 'react-icons/md'

// import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabsPane
          tab={
            <IconTab>
              <MdMonetizationOn />
              Resumo
            </IconTab>
          }
          key="1"
        >
          <ProductsResume />
        </TabsPane>
        <TabsPane
          tab={
            <IconTab>
              <MdAttachMoney />
              Meus produtos
            </IconTab>
          }
          key="2"
        ></TabsPane>
      </Tabs>
    </>
  )
}

export default Products
