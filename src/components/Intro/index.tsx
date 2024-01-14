import React from "react";

import AnimatedElement from "../AnimatedElement";

import { Container, IntroBox, Title, Description } from "./styles";

const Intro: React.FC = () => {
  return (
    <Container>
      <AnimatedElement animationType="fade-up" delay={0}>
        <IntroBox>
          <Title>
            A PRÓXIMA ERA DO <span> COUNTER-STRIKE </span> CHEGOU!
          </Title>
          <Description>
            <p>
              O Counter-Strike 2 é o maior salto tecnológico na história da
              série, garantindo novos recursos e atualizações para os próximos
              anos.
            </p>

            <p>
              O Counter-Strike 2 é uma atualização gratuita para o CS:GO.
              Portanto, monte o seu arsenal, aperfeiçoe as suas habilidades e
              prepare-se para o que está por vir!
            </p>

            <p>
              Continue lendo para conhecer alguns dos recursos do Counter-Strike
              2.
            </p>
          </Description>
        </IntroBox>
      </AnimatedElement>
    </Container>
  );
};

export default Intro;
