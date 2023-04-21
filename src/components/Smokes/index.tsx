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
        </Description>
      </Content>
    </Container>
  );
};

export default Smokes;
