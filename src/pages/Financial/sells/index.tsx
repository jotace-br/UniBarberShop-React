import { AccountBalanceWalletOutlined } from "@material-ui/icons";
import React from "react";
import { FaCheck, FaChevronUp, FaDollarSign } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import Select from "../../../components/Select";
import SmallCard from "../../../components/SmallCards";
import { SmallCardContainer } from "../../../components/SmallCards/style";
import { ExportContainer } from "../../Dashboard/style";
import DualAxes from "./graphs/DualAxesGraph";
import LineFillGraph from "./graphs/LineFillGraph";
import ProgressBar from "./graphs/ProgressBar";
import {
  StatusLabel,
  StatusList,
  StatusListItem,
  StatusValue,
  TwoCardContainer,
} from "./style";
import TableSells from "./table";

// import { Container } from './styles';
const { Option } = Select;
const Sells: React.FC = () => {
  return (
    <>
      <SmallCardContainer>
        <SmallCard
          color="#71E083"
          value="123"
          label="Saldo disponível"
          icon={<FaDollarSign />}
        />
        <SmallCard
          color="#7197E0"
          value="123"
          label="Saldo a receber"
          icon={<AccountBalanceWalletOutlined />}
        />
        <SmallCard
          color="#E6BE27"
          value="123"
          label="Total de transações"
          icon={<FaDollarSign />}
        />
      </SmallCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Transações por período</CardTitle>
            <CardSubTitle>
              Indicadores das transações por período selecionado
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <DualAxes />
        </CardContent>
        <ExportContainer>
          <p>Exportar em:</p>
          <Select defaultValue={"pdf"}>
            <Option value="pdf">PDF</Option>
            <Option value="excel">XLS</Option>
            <Option value="excel">DOC.X</Option>
            <Option value="odf">TXT</Option>
          </Select>
        </ExportContainer>
      </Card>
      <TwoCardContainer>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Métodos de pagamento</CardTitle>
              <CardSubTitle>
                Índice dos métodos de pagamentos mais utilizados
              </CardSubTitle>
            </div>
            <div />
          </CardHeader>
          <CardContent>
            <ProgressBar />
          </CardContent>
          <ExportContainer>
            <p>Exportar em:</p>
            <Select defaultValue={"pdf"}>
              <Option value="pdf">PDF</Option>
              <Option value="excel">XLS</Option>
              <Option value="excel">DOC.X</Option>
              <Option value="odf">TXT</Option>
            </Select>
          </ExportContainer>
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Vendas por status</CardTitle>
              <CardSubTitle>Visão geral</CardSubTitle>
            </div>
            <div />
          </CardHeader>
          <CardContent>
            <StatusList>
              <StatusListItem color="#71E083">
                <StatusLabel>
                  <FaCheck />
                  <p>Aprovado</p>
                </StatusLabel>
                <StatusValue color="#71E083">
                  <p>R$12.000,00</p>
                  <FaChevronUp />
                </StatusValue>
              </StatusListItem>
              <li></li>
              <li></li>
              <li></li>
            </StatusList>
          </CardContent>
          <ExportContainer>
            <p>Exportar em:</p>
            <Select defaultValue={"pdf"}>
              <Option value="pdf">PDF</Option>
              <Option value="excel">XLS</Option>
              <Option value="excel">DOC.X</Option>
              <Option value="odf">TXT</Option>
            </Select>
          </ExportContainer>
        </Card>
      </TwoCardContainer>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Vendas por período</CardTitle>
            <CardSubTitle>
              Indicadores das vendas por período selecionado
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <LineFillGraph />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Listagem de vendas únicas</CardTitle>
            <CardSubTitle>
              Acompanhe os detalhes das suas vendas e dados financeiros
            </CardSubTitle>
          </div>
          <div />
        </CardHeader>
        <CardContent>
          <TableSells />
        </CardContent>
      </Card>
    </>
  );
};

export default Sells;
