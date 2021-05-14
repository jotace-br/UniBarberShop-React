import cartArrowDown from "@iconify/icons-mdi/cart-arrow-down";
import currencyUsd from "@iconify/icons-mdi/currency-usd";
import walletOutline from "@iconify/icons-mdi/wallet-outline";
import { Icon } from "@iconify/react";
import moment from "moment";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../components/Card";
import { Rangepicker } from "../../components/Datepicker";
import Select from "../../components/Select";
import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../services/user";
import OneLineGraph from "./graphs//oneLineGraph";
import BarGraph from "./graphs/barGraph";
import LineGraph from "./graphs/lineGraph";
import {
  CardIcon,
  ExportContainer,
  FilterContainer,
  SmallCard,
  SmallCardAction,
  SmallCardContainer,
  SmallCardText,
  TwoCardContainer,
} from "./style";

const { Option } = Select;

const Dashboard: React.FC = () => {
  const dateFormat = "DD/MM/YY";

  const [rangePickerValue, setRangePickerValue] = useState();
  const [rangePickerDates, setRangePickerDates] = useState<any>([
    moment(moment().add(-1, "months"), dateFormat),
    moment(moment(), dateFormat),
  ]);
  const [rangePickerHackValue, setRangePickerHackValue] = useState<any>();
  const [isRangePickerOpen, setIsRangePickerOpen] = useState(false);

  const {
    data: { user },
  } = useUser();
  const { data: financial_summary } = useFetch("financial-summary");
  const { data: balance } = useFetch(`/check-balance/${user.seller_id}`);

  const onChangeRangePicker = (e: any) => {
    setRangePickerValue(e);
  };

  const onCalendarChangeRangePicker = (e: any) => {
    setRangePickerDates(e);
  };

  const onOpenChangeRangePicker = (open: boolean) => {
    if (open) {
      setIsRangePickerOpen(true);
      setRangePickerHackValue([]);
      setRangePickerDates([]);
    } else {
      setRangePickerHackValue(undefined);
      setIsRangePickerOpen(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Métodos de pagamento</CardTitle>
            <CardSubTitle>
              Índice dos métodos de pagamentos mais utilizados
            </CardSubTitle>
          </div>
          <div />
          <FilterContainer>
            <p>Fitrar:</p>
            <Rangepicker
              hackValue={rangePickerHackValue}
              dates={rangePickerDates}
              value={rangePickerValue}
              onChangeRP={onChangeRangePicker}
              onCalendarChangeRP={onCalendarChangeRangePicker}
              onOpenChangeRP={onOpenChangeRangePicker}
            />
          </FilterContainer>
        </CardHeader>
        <CardContent>
          <LineGraph
            rangePickerDate={rangePickerDates}
            isRangePickerOpen={isRangePickerOpen}
          />
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

      {/* card vendas */}

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Vendas</CardTitle>
            <CardSubTitle>Visão geral de suas vendas</CardSubTitle>
          </div>
        </CardHeader>
        <CardContent>
          <SmallCardContainer>
            <SmallCard>
              <CardIcon color="#F9C96E">
                <Icon icon={cartArrowDown} />
              </CardIcon>
              <SmallCardText>
                <p>
                  {!financial_summary
                    ? "..."
                    : financial_summary.financial_summary.sales}
                </p>
                <p>Vendas efetuadas</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#71E083">
                <Icon icon={currencyUsd} />
              </CardIcon>
              <SmallCardText>
                <p>
                  {!financial_summary
                    ? "..."
                    : financial_summary.financial_summary.net_value.toLocaleString(
                        "pt-BR",
                        { style: "currency", currency: "BRL" }
                      )}
                </p>
                <p>Valor líquido</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
            <SmallCard>
              <CardIcon color="#7197E0">
                <Icon icon={walletOutline} />
              </CardIcon>
              <SmallCardText>
                <p>
                  {!balance
                    ? "..."
                    : balance.balance.account_balance.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                </p>
                <p>Disponível para antecipar</p>
              </SmallCardText>
              <SmallCardAction>
                <FaChevronRight />
              </SmallCardAction>
            </SmallCard>
          </SmallCardContainer>
        </CardContent>
      </Card>
      <TwoCardContainer>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Produtos</CardTitle>
              <CardSubTitle>Visão geral dos seus produtos</CardSubTitle>
            </div>
          </CardHeader>
          <CardContent>
            <BarGraph />
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
              <CardTitle>Vendas</CardTitle>
              <CardSubTitle>Visão geral das suas vendas</CardSubTitle>
            </div>
          </CardHeader>
          <CardContent>
            <OneLineGraph />
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
    </>
  );
};

export default Dashboard;
