import React from "react";

import ContentBox from "../ContentBox";

import { Description, HeaderText, audio } from "./styles";

const Audio: React.FC = () => {
  return (
    <ContentBox contentMinHeight="1200px" backgroundImage="bg-orange.svg">
      <Description>
        <HeaderText>Áudio preciso</HeaderText>

        <h3>Refeitos, re-equalizados, reverberados</h3>

        <p>
          Os sons do Counter-Strike 2 foram remasterizados para refletirem o
          ambiente físico mais fielmente, serem mais distintos e expressarem
          melhor o estado da partida. Eles também foram re-equalizados para
          oferecer uma experiência auditiva mais confortável.
        </p>

        <img src={audio}></img>
      </Description>
    </ContentBox>
  );
};

export default Audio;
