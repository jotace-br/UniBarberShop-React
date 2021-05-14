import { AccountBalanceWalletOutlined } from "@material-ui/icons";
import React from "react";
import { FaDollarSign, FaEllipsisV } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import SmallCard from "../../../components/SmallCards";
import { SmallCardContainer } from "../../../components/SmallCards/style";
import { SmallCardAction } from "../style";

// import { Container } from './styles';

const Recurrences: React.FC = () => {
  return (
    <>
      <SmallCardContainer>
        <SmallCard
          color="#71E083"
          value="123"
          label="Saldo disponível"
          icon={<FaDollarSign />}
          linkTo="/relatorios"
        />
        <SmallCard
          color="#7197E0"
          value="123"
          label="Saldo a receber"
          icon={<AccountBalanceWalletOutlined />}
          linkTo="/relatorios"
        />
        <SmallCard
          color="#E6BE27"
          value="123"
          label="Total de transações"
          icon={<FaDollarSign />}
          linkTo="/relatorios"
        />
      </SmallCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Listagem de vendas</CardTitle>
            <CardSubTitle>Acompanhe os detalhes de suas vendas</CardSubTitle>
          </div>
          <SmallCardAction>
            <FaEllipsisV />
          </SmallCardAction>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default Recurrences;
