import React from "react";
import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";

import { IoReload } from "react-icons/io5";
import { TextWithIcon } from "../../../components/TextWithIcon";
import { StyledTab, StyledTabPane } from "../../../components/Tabs";
// import { Container } from './styles';

const Api: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Chaves da API</CardTitle>
          <CardSubTitle>Veja as chaves de API ou cadastre novas</CardSubTitle>
        </div>
        <ButtonPrimary>
          <TextWithIcon>
            Novo token &nbsp;
            <IoReload />
          </TextWithIcon>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <StyledTab>
          <StyledTabPane tab="Token de acesso" key="1">
            api key
            <br />
            api password
          </StyledTabPane>
        </StyledTab>
      </CardContent>
    </Card>
  );
};

export default Api;
