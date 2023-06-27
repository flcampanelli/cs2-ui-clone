import React, { useState } from "react";

import MainVideo from "../MainVideo";
import CompareSlider from "../CompareSlider";
import ContentBox from "../ContentBox";

import {
  Description,
  HeaderText,
  SubSectionText,
  ButtonContainer,
  Button,
} from "./styles";

const Maps: React.FC = () => {
  const [overpassImage, setOverpassImage] = useState("overpass_back_long_s");
  const [nukeImage, setNukeImage] = useState("nuke_default_s");
  const [dustImage, setDustImage] = useState("dust2_back_plat_s");

  const [selectedDustMapArea, setSelectedDustMapArea] = useState("long");

  const changeOverpassArea = (area: string) => {
    switch (area) {
      case "tunnel":
        setSelectedDustMapArea(`${area}`);
        setOverpassImage("overpass_lower_tunnel_s");
        break;
      case "toilet":
        setSelectedDustMapArea(`${area}`);
        setOverpassImage("overpass_toilets_s");
        break;
      case "bombA":
        setSelectedDustMapArea(`${area}`);
        setOverpassImage("overpass_van_vista_s");
        break;
      default:
        setSelectedDustMapArea(`${area}`);
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

  const changeDustArea = (area: string) => {
    switch (area) {
      case "blue":
        setDustImage("dust2_blue_s");
        break;
      case "ramp":
        setDustImage("dust2_ct_ramp_s");
        break;
      default:
        setDustImage("dust2_back_plat_s");
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
            <Button
              onClick={() => changeOverpassArea("long")}
              className={selectedDustMapArea === "long" ? "selected" : ""}
            >
              Fundo
            </Button>
            <Button
              onClick={() => changeOverpassArea("tunnel")}
              className={selectedDustMapArea === "tunnel" ? "selected" : ""}
            >
              Túnel inferior
            </Button>
            <Button
              onClick={() => changeOverpassArea("toilet")}
              className={selectedDustMapArea === "toilet" ? "selected" : ""}
            >
              Banheiro
            </Button>
            <Button
              onClick={() => changeOverpassArea("bombA")}
              className={selectedDustMapArea === "bombA" ? "selected" : ""}
            >
              Alvo de explosão A
            </Button>
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
            <Button onClick={() => changeNukeArea("bombA")}>
              Alvo de explosão A
            </Button>
            <Button onClick={() => changeNukeArea("ramp")}>Rampa</Button>
            <Button onClick={() => changeNukeArea("tBase")}>Base dos Ts</Button>
            <Button onClick={() => changeNukeArea("backhall")}>Túneis</Button>
          </ButtonContainer>
        </CompareSlider>

        <CompareSlider
          headerText="Pratas da casa"
          bodyText="Mapas clássicos com bases sólidas que os jogadores podem usar para 
              avaliar o que mudou do CS:GO para o Counter-Strike 2. Eles foram 
              aprimorados com melhor iluminação e legibilidade, mas não mudaram além 
              disso."
          exampleMap="Dust II"
          leftImageName={`${dustImage}2`}
          rightImageName={`${dustImage}1`}
        >
          <ButtonContainer>
            <Button onClick={() => changeDustArea("backPlat")}>
              Fundo do altar
            </Button>
            <Button onClick={() => changeDustArea("blue")}>Casinha</Button>
            <Button onClick={() => changeDustArea("ramp")}>Base dos CTs</Button>
            <Button onClick={() => changeDustArea("backhall")}>
              Portas do meio
            </Button>
          </ButtonContainer>
        </CompareSlider>

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
