import React from "react";

import {
  Container,
  Content,
  HeaderText,
  Description,
  VideoContainer,
  Overlay,
} from "./styles";
import {} from "../Intro/styles";
import VideoRow from "../VideoRow";

const Smokes: React.FC = () => {
  return (
    <Container>
      <Content>
        {/* <iframe
          width="100%"
          height="620"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Counter-Strike 2: Responsive Smokes"
          src="https://www.youtube.com/embed/_y9MpNcAitQ?autoplay=0&amp;showinfo=0&amp;autohide=1&amp;fs=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;iv_load_policy=3&amp;controls=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.counter-strike.net&amp;widgetid=1"
          id="widget2"
        ></iframe> */}

        <VideoContainer>
          <video width="100%" height="100%" autoPlay muted loop preload="auto">
            <source
              src="/src/assets/videos/video_smokes.mp4"
              type="video/mp4"
            />
          </video>

          <Overlay>
            <h1>Counter-Strike 2:</h1>
          </Overlay>
        </VideoContainer>

        <Description>
          <HeaderText>O JOGO MUDOU</HeaderText>

          <p>
            Agora, granadas de fumaça são objetos volumétricos dinâmicos que
            interagem com o ambiente e reagem à iluminação, disparos e
            explosões.
          </p>

          <VideoRow
            title="Jogabilidade"
            description={`Agora, a fumaça pode interagir com outros eventos de 
              jogabilidade, criando novas oportunidades. Balas e granadas 
              explosivas podem "empurrar a fumaça" para abrir linhas de visão 
              ou expandir a oclusão brevemente.`}
            videoName="smokes_vid2"
          />

          <VideoRow
            title="Expande naturalmente para preencher espaços"
            description="Agora, a fumaça escapará por portas abertas e janelas 
              quebradas, subirá e descerá escadas, expandirá em corredores 
              longos e se juntará a outras fumaças."
            reverse
            videoName="smokes_vid1"
          />

          <VideoRow
            title="Reage à iluminação"
            description="No Counter-Strike 2, as partículas de fumaça funcionam 
              com o sistema unificado de iluminação, permitindo luzes e cores 
              mais realísticas."
            videoName="smokes_vid3"
          />
        </Description>
      </Content>
    </Container>
  );
};

export default Smokes;
