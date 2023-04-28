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

          <CompareSlider />
        </Description>
      </Content>
    </Container>
  );
};

export default Maps;
