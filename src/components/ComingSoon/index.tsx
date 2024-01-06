import React from "react";

import ContentBox from "../ContentBox";
import AnimatedElement from "../AnimatedElement";

import { Description, HeaderText } from "./styles";

const ComingSoon: React.FC = () => {
  return (
    <ContentBox contentMinHeight="603px" backgroundImage="bg-gray.svg">
      <AnimatedElement animationType="fade-left" duration={1000}>
        <Description>
          <HeaderText>Não é só isso</HeaderText>

          <p>
            O Teste Limitado existe para avaliar um subconjunto dos recursos do
            Counter-Strike 2. Dessa forma, problemas graves poderão ser
            resolvidos antes do lançamento. Mas ainda há muito mais por vir. Nos
            próximos meses, revelaremos todos os detalhes do Counter-Strike 2, e
            mal podemos esperar para compartilhar tudo com vocês.
          </p>
        </Description>
      </AnimatedElement>
    </ContentBox>
  );
};

export default ComingSoon;
