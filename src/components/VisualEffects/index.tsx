import React from "react";

import { Container, Content, Description, HeaderText } from "./styles";
import VideoRow from "../VideoRow";

const VisualEffects: React.FC = () => {
  return (
    <Container>
      <Content>
        <Description>
          <HeaderText>Efeitos visuais de alta definição</HeaderText>

          <h3>
            Da interface à jogabilidade, todos os efeitos visuais foram
            reimaginados.
          </h3>

          <p>
            Todos os efeitos visuais foram atualizados no Counter-Strike 2. Com
            os sistemas de iluminação e partículas da Source 2, há novos visuais
            e comportamentos para corpos d'água, explosões, labaredas, fumaças,
            flashes de disparo, traçados de balas, efeitos de impacto e mais.
          </p>

          <VideoRow
            title="Visuais de jogabilidade"
            description={`No Counter-Strike 2, os elementos visuais mais vitais 
              foram redesenhados com a legibilidade em mente. Os impactos de 
              balas podem ser facilmente vistos a distância, e manchas de 
              sangue direcionais (que vão desparecendo com o tempo) dão mais 
              informações enquanto você se move pelo mapa.`}
            videoName="blood_hit_fx"
          />

          <VideoRow
            title="Efeitos do ambiente"
            description={`Experimente versões retrabalhadas de explosões, 
              labaredas, C4 e mais. Fazendo uso da engine Source 2 e 
              computadores modernos, os efeitos de ambiente do 
              Counter-Strike 2 contam com melhor fidelidade visual 
              e maior consistência.`}
            videoName="explosions"
            reverse
          />

          <VideoRow
            title="Aprimoramentos da interface"
            description={`A interface do Counter-Strike 2 está com uma cara 
              completamente nova, incluindo novos efeitos visuais na interface 
              de partida. Esses aprimoramentos não apenas são colírio para os 
              olhos, mas também comunicam o estado da partida.`}
            videoName="UI"
          />
        </Description>
      </Content>
    </Container>
  );
};

export default VisualEffects;
