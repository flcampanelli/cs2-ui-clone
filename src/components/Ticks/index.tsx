import React from "react";

import ContentBox from "../ContentBox";
import MainVideo from "../MainVideo";

import { Description, HeaderText } from "./styles";

const Ticks: React.FC = () => {
  return (
    <ContentBox contentMinHeight="1445px" backgroundImage="bg-orange.svg">
      <MainVideo
        title="Indo além dos tiques"
        videoName="video_ticks"
        videoId="GqhhFl5zgA0"
      />

      <Description>
        <HeaderText>Tique, taque, tchau</HeaderText>

        <h3>
          A taxa de tiques (tickrate) não afeta mais a movimentação, disparos ou
          lançamentos.
        </h3>

        <p>
          As atualizações entre tiques (também conhecido como "sub-tick") estão
          no cerne do Counter-Strike 2. Antes, o servidor avaliava o mundo
          apenas em intervalos definidos de tempo (os tais "tiques"). Graças à
          arquitetura de atualização entre tiques do Counter-Strike 2, os
          servidores sabem o instante exato em que um movimento é iniciado, uma
          arma é disparada ou uma granada é lançada.
        </p>

        <br />

        <p>
          Assim, não importa a taxa de tiques, a sua movimentação e os seus
          disparos terão a mesma responsividade, e as suas granadas cairão
          sempre da mesma forma.
        </p>
      </Description>
    </ContentBox>
  );
};

export default Ticks;
