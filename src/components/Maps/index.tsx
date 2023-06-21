import React, { useState } from "react";

import MainVideo from "../MainVideo";
import CompareSlider from "../CompareSlider";
import ContentBox from "../ContentBox";

import {
  Description,
  HeaderText,
  SubSectionText,
  ButtonContainer,
} from "./styles";

const Maps: React.FC = () => {
  //const overpassImage = "overpass_back_long_s";
  const [overpassImage, setOverpassImage] = useState("overpass_back_long_s");
  const [nukeImage, setNukeImage] = useState("nuke_default_s");

  const changeOverpassArea = (area: string) => {
    switch (area) {
      case "tunnel":
        setOverpassImage("overpass_lower_tunnel_s");
        break;
      case "toilet":
        setOverpassImage("overpass_toilets_s");
        break;
      case "bombA":
        setOverpassImage("overpass_van_vista_s");
        break;
      default:
        setOverpassImage("overpass_back_long_s");
    }
  };

  const changeNukeArea = (area: string) => {
    switch (area) {
      case "ramp":
        setNukeImage("nuke_ramp_s");
        break;
      case "tBase":
        setNukeImage("nuke_t_s");
        break;
      case "backhall":
        setNukeImage("nuke_backhall_s");
        break;
      default:
        setNukeImage("nuke_default_s");
    }
  };

  return (
    <ContentBox
      contentMinHeight={"4460px"}
      backgroundImage={"/src/assets/images/bg-gray.svg"}
    >
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
          leftImageName={`${overpassImage}2`}
          rightImageName={`${overpassImage}1`}
        >
          <ButtonContainer>
            <button onClick={() => changeOverpassArea("long")}>Fundo</button>
            <button onClick={() => changeOverpassArea("tunnel")}>
              Túnel inferior
            </button>
            <button onClick={() => changeOverpassArea("toilet")}>
              Banheiro
            </button>
            <button onClick={() => changeOverpassArea("bombA")}>
              Alvo de explosão A
            </button>
          </ButtonContainer>
        </CompareSlider>

        <CompareSlider
          headerText="Mapas aprimorados"
          bodyText="Estes são os mapas que usam a nova iluminação da Source 2, incluindo 
              um sistema de renderização baseada na física que produz materiais, luzes e 
              reflexos realísticos."
          exampleMap="NUKE"
          leftImageName={`${nukeImage}2`}
          rightImageName={`${nukeImage}1`}
        >
          <ButtonContainer>
            <button onClick={() => changeNukeArea("bombA")}>
              Alvo de explosão A
            </button>
            <button onClick={() => changeNukeArea("ramp")}>Rampa</button>
            <button onClick={() => changeNukeArea("tBase")}>Base dos Ts</button>
            <button onClick={() => changeNukeArea("backhall")}>Túneis</button>
          </ButtonContainer>
        </CompareSlider>

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

        <SubSectionText>Ferramentas da Source 2</SubSectionText>

        <p>
          As ferramentas e recursos de renderização da Source 2 estarão
          disponíveis aos criadores de mapas comunitários para facilitar o
          desenvolvimento, experimentação e iteração. Além disso, as ferramentas
          da Oficina de Itens da Source 2 serão lançadas durante o teste
          limitado.
        </p>

        <video width="77%" autoPlay muted loop preload="auto">
          <source src="/src/assets/videos/map_s2tools.mp4" type="video/mp4" />
        </video>
      </Description>
    </ContentBox>
  );
};

export default Maps;
