import React from "react";

import ContentBox from "../ContentBox";
import AnimatedElement from "../AnimatedElement";
import MainVideo from "../MainVideo";

import { Description, HeaderText } from "./styles";

const Matchmaking: React.FC = () => {
  return (
    <ContentBox contentMinHeight="1285px" backgroundImage="bg-orange.svg">
      <AnimatedElement animationType="fade-right">
        <MainVideo
          title="Além do Global"
          videoName="video_matchmaking"
          videoId="s6BNHro0vSg"
          width="540px"
        />

        <Description>
          <HeaderText>NOVA CSFICAÇÃO</HeaderText>

          <h3>Vá além do Global com a nova CSficação.</h3>

          <p>
            A sua CSficação é uma medida visível do seu desempenho no
            Counter-Strike, determinando a sua posição nas tabelas de
            classificação mundiais e regionais. Para obter a sua CSficação,
            jogue partidas no modo Especial atualizado (o nosso modo competitivo
            com banimento de mapas da Campanha Ativa), seja por conta própria ou
            com amigos.
          </p>
        </Description>
      </AnimatedElement>
    </ContentBox>
  );
};

export default Matchmaking;
