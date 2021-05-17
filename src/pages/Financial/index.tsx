import React from "react";
import {
  MdAccountBalance,
  MdAttachMoney,
  MdMonetizationOn,
} from "react-icons/md";
import { IconTab, Tabs, TabsPane } from "../../components/Tabs";
import Financial from "./financial";
import Recurrences from "./recurrences";
import Sells from "./sells";

// import { Container } from './styles';

const FinancialResume: React.FC = () => {
  return (
    <>
      <Tabs activeKey="2">
        <TabsPane
          tab={
            <IconTab>
              <MdMonetizationOn />
              Recorrências
            </IconTab>
          }
          key="1"
        >
          <Recurrences />
        </TabsPane>
        <TabsPane
          tab={
            <IconTab>
              <MdAttachMoney />
              Vendas
            </IconTab>
          }
          key="2"
        >
          <Sells />
        </TabsPane>
        <TabsPane
          tab={
            <IconTab>
              <MdAccountBalance />
              Financeiro
            </IconTab>
          }
          key="3"
        >
          <Financial />
        </TabsPane>
      </Tabs>
    </>
  );
};

export default FinancialResume;
