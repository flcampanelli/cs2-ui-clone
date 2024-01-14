import React from "react";

import ContentBox from "../ContentBox";
import AnimatedElement from "../AnimatedElement";

import { Description, HeaderText } from "./styles";

const ComingSoon: React.FC = () => {
  return (
    <ContentBox contentMinHeight="603px" backgroundImage="bg-gray.svg">
      <AnimatedElement animationType="fade-left" duration={1000}>
        <Description>
          <HeaderText>O COUNTER-STRIKE 2 ESTÁ AQUI</HeaderText>

          <p>
            A comunidade do Counter-Strike passou meses jogando no Teste
            Limitado do CS2 e enviando comentários para ajudar a moldar o jogo
            antes do seu lançamento. Junte-se a milhões de jogadores que estão
            aperfeiçoando as suas habilidades e subindo de patente. Damos as
            boas-vindas ao Counter-Strike 2.
          </p>
        </Description>
      </AnimatedElement>
    </ContentBox>
  );
};

export default ComingSoon;
