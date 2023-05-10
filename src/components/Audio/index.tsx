import React from "react";

import { Container, Content, Description, HeaderText } from "./styles";

const Audio: React.FC = () => {
  return (
    <Container>
      <Content>
        <Description>
          <HeaderText>Áudio preciso</HeaderText>

          <h3>Refeitos, re-equalizados, reverberados</h3>

          <p>
            Os sons do Counter-Strike 2 foram remasterizados para refletirem o
            ambiente físico mais fielmente, serem mais distintos e expressarem
            melhor o estado da partida. Eles também foram re-equalizados para
            oferecer uma experiência auditiva mais confortável.
          </p>

          <img src="/src/assets/images/audio.png"></img>
        </Description>
      </Content>
    </Container>
  );
};

export default Audio;
