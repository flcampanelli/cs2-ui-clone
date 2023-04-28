import React from "react";
import ReactCompareImage from "react-compare-image";

import { Container, Header } from "./styles";

const CompareSlider: React.FC = () => {
  return (
    <Container>
      <Header>Mapas reformulados</Header>

      <h4>
        Os mapas reformulados foram refeitos do zero, aproveitando todas as
        novas ferramentas e recursos de renderização da Source 2.
      </h4>

      <p>
        Mapa de exemplo: <b>Overpass</b>
      </p>

      <ReactCompareImage
        leftImage="/src/assets/images/overpass-back-long-s2.jpg"
        rightImage="/src/assets/images/overpass_back_long_s1.jpg"
      />
    </Container>
  );
};

export default CompareSlider;
