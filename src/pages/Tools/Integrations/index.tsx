import React from "react";

import { ButtonPrimary } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "../../../components/Card";
import { StyledTab, StyledTabPane } from "../../../components/Tabs";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
// import { Container } from './styles';

const Api: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Listagem de webhooks</CardTitle>
          <CardSubTitle>
            Veja todos os webhooks cadastrados e adicione novos
          </CardSubTitle>
        </div>
        <ButtonPrimary>
          <p>Adicionar +</p>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <StyledTab>
          <StyledTabPane tab="Disponíveis" key="1">
            <h3>Plataformas ativas</h3>
            <h4>
              <RiLayoutGridFill /> 3 plataformas
            </h4>

            <Card>
              <section style={{ display: "flex" }}>
                <div
                  style={{
                    background: "#222222",
                    height: "100px",
                    width: "68px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaFacebook size="50px" />
                </div>
                <div
                  style={{
                    marginLeft: 17,
                  }}
                >
                  <h3>plataforma</h3>
                  <h4>Aqui vai uma breve descrição sobre a plataforma </h4>
                  <ButtonPrimary>
                    <p>Conectar</p>
                  </ButtonPrimary>
                </div>
              </section>
            </Card>
          </StyledTabPane>
          <StyledTabPane tab="Ativos" key="2">
            <h3>Plataformas disponíveis</h3>
            <h4>
              <RiLayoutGridFill /> 12 plataformas
            </h4>

            <Card>
              <section style={{ display: "flex" }}>
                <div
                  style={{
                    background: "#222222",
                    height: "100px",
                    width: "68px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaFacebook size="50px" />
                </div>
                <div
                  style={{
                    marginLeft: 17,
                  }}
                >
                  <h3>plataforma</h3>
                  <h4>Aqui vai uma breve descrição sobre a plataforma </h4>
                  <ButtonPrimary>
                    <p>Conectar</p>
                  </ButtonPrimary>
                </div>
              </section>
            </Card>
          </StyledTabPane>
        </StyledTab>
      </CardContent>
    </Card>
  );
};

export default Api;
