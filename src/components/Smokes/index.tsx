import React from "react";

import VideoRow from "../VideoRow";
import MainVideo from "../MainVideo";
import ContentBox from "../ContentBox";

import { HeaderText, Description } from "./styles";

const Smokes: React.FC = () => {
  return (
    <ContentBox
      contentMinHeight={"2485px"}
      backgroundImage={"/src/assets/images/bg-gray.svg"}
    >
      <MainVideo title="Fumaças Interativas" videoName="video_smokes" />

      <Description>
        <HeaderText>O JOGO MUDOU</HeaderText>

        <p>
          Agora, granadas de fumaça são objetos volumétricos dinâmicos que
          interagem com o ambiente e reagem à iluminação, disparos e explosões.
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
    </ContentBox>
  );
};

export default Smokes;
