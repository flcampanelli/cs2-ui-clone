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
  map_s2tools,
} from "./styles";

const Maps: React.FC = () => {
  const [overpassImage, setOverpassImage] = useState("overpass_back_long_s");
  const [nukeImage, setNukeImage] = useState("nuke_default_s");
  const [dustImage, setDustImage] = useState("dust2_back_plat_s");

  const [selectedOverpassMapArea, setSelectedOverpassMapArea] =
    useState("long");
  const [selectedNukeMapArea, setSelectedNukeMapArea] = useState("bombA");
  const [selectedDustMapArea, setSelectedDustMapArea] = useState("backPlat");

  const changeOverpassArea = (area: string) => {
    switch (area) {
      case "tunnel":
        setSelectedOverpassMapArea(`${area}`);
        setOverpassImage("overpass_lower_tunnel_s");
        break;
      case "toilet":
        setSelectedOverpassMapArea(`${area}`);
        setOverpassImage("overpass_toilets_s");
        break;
      case "bombA":
        setSelectedOverpassMapArea(`${area}`);
        setOverpassImage("overpass_van_vista_s");
        break;
      default:
        setSelectedOverpassMapArea(`${area}`);
        setOverpassImage("overpass_back_long_s");
    }
  };

  const changeNukeArea = (area: string) => {
    switch (area) {
      case "ramp":
        setSelectedNukeMapArea(`${area}`);
        setNukeImage("nuke_ramp_s");
        break;
      case "tBase":
        setSelectedNukeMapArea(`${area}`);
        setNukeImage("nuke_t_s");
        break;
      case "backhall":
        setSelectedNukeMapArea(`${area}`);
        setNukeImage("nuke_backhall_s");
        break;
      default:
        setSelectedNukeMapArea(`${area}`);
        setNukeImage("nuke_default_s");
    }
  };

  const changeDustArea = (area: string) => {
    switch (area) {
      case "blue":
        setSelectedDustMapArea(`${area}`);
        setDustImage("dust2_blue_s");
        break;
      case "ramp":
        setSelectedDustMapArea(`${area}`);
        setDustImage("dust2_ct_ramp_s");
        break;
      case "doubleDoors":
        setSelectedDustMapArea(`${area}`);
        setDustImage("dust2_double_doors_s");
        break;
      default:
        setSelectedDustMapArea(`${area}`);
        setDustImage("dust2_back_plat_s");
    }
  };

  return (
    <ContentBox contentMinHeight="4460px" backgroundImage="bg-gray">
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
          leftImageName={`${overpassImage}2.jpg`}
          rightImageName={`${overpassImage}1.jpg`}
        >
          <ButtonContainer>
            <Button
              onClick={() => changeOverpassArea("long")}
              className={selectedOverpassMapArea === "long" ? "selected" : ""}
            >
              Fundo
            </Button>
            <Button
              onClick={() => changeOverpassArea("tunnel")}
              className={selectedOverpassMapArea === "tunnel" ? "selected" : ""}
            >
              Túnel inferior
            </Button>
            <Button
              onClick={() => changeOverpassArea("toilet")}
              className={selectedOverpassMapArea === "toilet" ? "selected" : ""}
            >
              Banheiro
            </Button>
            <Button
              onClick={() => changeOverpassArea("bombA")}
              className={selectedOverpassMapArea === "bombA" ? "selected" : ""}
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
          leftImageName={`${nukeImage}2.jpg`}
          rightImageName={`${nukeImage}1.jpg`}
        >
          <ButtonContainer>
            <Button
              onClick={() => changeNukeArea("bombA")}
              className={selectedNukeMapArea === "bombA" ? "selected" : ""}
            >
              Alvo de explosão A
            </Button>
            <Button
              onClick={() => changeNukeArea("ramp")}
              className={selectedNukeMapArea === "ramp" ? "selected" : ""}
            >
              Rampa
            </Button>
            <Button
              onClick={() => changeNukeArea("tBase")}
              className={selectedNukeMapArea === "tBase" ? "selected" : ""}
            >
              Base dos Ts
            </Button>
            <Button
              onClick={() => changeNukeArea("backhall")}
              className={selectedNukeMapArea === "backhall" ? "selected" : ""}
            >
              Túneis
            </Button>
          </ButtonContainer>
        </CompareSlider>

        <CompareSlider
          headerText="Pratas da casa"
          bodyText="Mapas clássicos com bases sólidas que os jogadores podem usar para
              avaliar o que mudou do CS:GO para o Counter-Strike 2. Eles foram
              aprimorados com melhor iluminação e legibilidade, mas não mudaram além
              disso."
          exampleMap="Dust II"
          leftImageName={`${dustImage}2.jpg`}
          rightImageName={`${dustImage}1.jpg`}
        >
          <ButtonContainer>
            <Button
              onClick={() => changeDustArea("backPlat")}
              className={selectedDustMapArea === "backPlat" ? "selected" : ""}
            >
              Fundo do altar
            </Button>
            <Button
              onClick={() => changeDustArea("blue")}
              className={selectedDustMapArea === "blue" ? "selected" : ""}
            >
              Casinha
            </Button>
            <Button
              onClick={() => changeDustArea("ramp")}
              className={selectedDustMapArea === "ramp" ? "selected" : ""}
            >
              Base dos CTs
            </Button>
            <Button
              onClick={() => changeDustArea("doubleDoors")}
              className={
                selectedDustMapArea === "doubleDoors" ? "selected" : ""
              }
            >
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
          <source src={map_s2tools} type="video/mp4" />
        </video>
      </Description>
    </ContentBox>
  );
};

export default Maps;
