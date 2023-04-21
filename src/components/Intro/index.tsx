import React from "react";

import { Container, IntroBox, Title, Description } from "./styles";

const Intro: React.FC = () => {
  return (
    <Container>
      <IntroBox>
        <Title>
          <span>A PRÓXIMA ERA DO</span>
          <span>COUNTER-STRIKE</span>
          <span>COMEÇA NESTE INVERNO</span>
        </Title>
        <Description>
          <p>
            O Counter-Strike 2 é o maior salto tecnológico na história da série,
            garantindo novos recursos e atualizações para os próximos anos.
          </p>

          <p>
            Todos os novos recursos do jogo serão revelados no lançamento
            oficial no inverno, mas a jornada para o Counter-Strike 2 começa
            hoje com o Teste Limitado para jogadores selecionados do CS:GO.
            Nesse período, avaliaremos um subconjunto dos recursos para resolver
            problemas graves antes do lançamento mundial.
          </p>

          <p>
            O Counter-Strike 2 será lançado neste inverno como uma atualização
            gratuita do CS:GO. Portanto, monte o seu arsenal, aperfeiçoe as suas
            habilidades e prepare-se para o que está por vir!
          </p>

          <p>
            Continue lendo para conhecer alguns dos recursos do Teste Limitado
            do Counter-Strike 2.
          </p>
        </Description>
      </IntroBox>
    </Container>
  );
};

export default Intro;
