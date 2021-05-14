import React from "react";
import { AiFillAppstore, AiFillDollarCircle } from "react-icons/ai";
import { FaAddressCard, FaChevronRight } from "react-icons/fa";
import {
  CardIcon,
  SmallCard,
  SmallCardAction,
  SmallCardContainer,
  SmallCardText,
} from "../../components/SmallCards/style";
import { IconTab, Tabs, TabsPane } from "../../components/Tabs";
import Products from "./_products";
import Recurrences from "./_recurrences";
import Sells from "./_sells";

// import { Container } from './styles';

const Reports: React.FC = () => {
  return (
    <>
      <Tabs>
        <TabsPane
          tab={
            <IconTab>
              <AiFillDollarCircle />
              Vendas
            </IconTab>
          }
          key="1"
        >
          <SmallCardContainer>
            <SmallCard>
              <CardIcon color="#71E083"></CardIcon>
              <SmallCardText>
                <p>R$ 345,00</p>
                <p>Vendas finalizadas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#F9C96E"></CardIcon>
              <SmallCardText>
                <p>R$ 345,00</p>
                <p>Pagamentos pendentes</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#FF7070"></CardIcon>
              <SmallCardText>
                <p>R$ 345,00</p>
                <p>Vendas canceladas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
          </SmallCardContainer>

          <Sells />
        </TabsPane>
        <TabsPane
          tab={
            <IconTab>
              <AiFillAppstore />
              Produtos
            </IconTab>
          }
          key="2"
        >
          <Products />
        </TabsPane>
        <TabsPane
          tab={
            <IconTab>
              <FaAddressCard />
              Recorrências
            </IconTab>
          }
          key="3"
        >
          <Recurrences />
        </TabsPane>
      </Tabs>
    </>
  );
};

export default Reports;
