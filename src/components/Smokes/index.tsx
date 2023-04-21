import React from "react";

import { Container, Content, HeaderText, Description } from "./styles";
import {} from "../Intro/styles";
import VideoRow from "../VideoRow";

const Smokes: React.FC = () => {
  return (
    <Container>
      <Content>
        <div
          style={{ width: "100%", height: "624px", background: "gray" }}
        ></div>

        <Description>
          <HeaderText>O JOGO MUDOU</HeaderText>

          <p>
            Agora, granadas de fumaça são objetos volumétricos dinâmicos que
            interagem com o ambiente e reagem à iluminação, disparos e
            explosões.
          </p>

          <VideoRow
            title="Jogabilidade"
            description="Agora, a fumaça pode interagir com outros eventos de 
              jogabilidade, criando novas oportunidades. Balas e granadas 
              explosivas podem empurrar a fumaça para abrir linhas de visão 
              ou expandir a oclusão brevemente."
          />

          <VideoRow
            title="Expande naturalmente para preencher espaços"
            description="Agora, a fumaça escapará por portas abertas e janelas 
              quebradas, subirá e descerá escadas, expandirá em corredores 
              longos e se juntará a outras fumaças."
            reverse
          />

          <VideoRow
            title="Reage à iluminação"
            description="No Counter-Strike 2, as partículas de fumaça funcionam 
              com o sistema unificado de iluminação, permitindo luzes e cores 
              mais realísticas."
          />
        </Description>
      </Content>
    </Container>
  );
};

export default Smokes;
