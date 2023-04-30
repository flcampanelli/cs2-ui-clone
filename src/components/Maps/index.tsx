import React from "react";

import { Container, Content, Description, HeaderText } from "./styles";
import MainVideo from "../MainVideo";
import CompareSlider from "../CompareSlider";

const Maps: React.FC = () => {
  return (
    <Container>
      <Content>
        <MainVideo title="Admiráveis mapas novos" videoName="video_maps" />

        <Description>
          <HeaderText>Não é nostalgia, é tecnologia</HeaderText>

          <h3>
            De aprimoramentos a reformulações, os mapas estão mais limpos, mais
            claros e melhores.
          </h3>

          <CompareSlider
            headerText="Mapas reformulados"
            bodyText="Os mapas reformulados foram refeitos do zero, aproveitando todas as
              novas ferramentas e recursos de renderização da Source 2."
            exampleMap="Overpass"
            leftImageName="overpass-back-long-s2"
            rightImageName="overpass_back_long_s1"
          />

          <CompareSlider
            headerText="Mapas aprimorados"
            bodyText="Estes são os mapas que usam a nova iluminação da Source 2, incluindo 
              um sistema de renderização baseada na física que produz materiais, luzes e 
              reflexos realísticos."
            exampleMap="NUKE"
            leftImageName="nuke_default_s2"
            rightImageName="nuke_default_s1"
          />

          <CompareSlider
            headerText="Pratas da casa"
            bodyText="Mapas clássicos com bases sólidas que os jogadores podem usar para 
              avaliar o que mudou do CS:GO para o Counter-Strike 2. Eles foram 
              aprimorados com melhor iluminação e legibilidade, mas não mudaram além 
              disso."
            exampleMap="Dust II"
            leftImageName="dust2_back_plat_s2"
            rightImageName="dust2_back_plat_s1"
          />
        </Description>
      </Content>
    </Container>
  );
};

export default Maps;
