import React from "react";

import { getVideoUrl } from "../../utils/functions";
import {
  Container,
  VideoContainer,
  Overlay,
  VideoSubHeaderText,
  VideoHeaderText,
  PlayButton,
  playButton,
} from "./styles";

interface MainVideoProps {
  title: string;
  videoName: string;
}

const MainVideo: React.FC<MainVideoProps> = ({ title, videoName }) => {
  return (
    <Container>
      <VideoContainer>
        <video width="100%" height="100%" autoPlay muted loop preload="auto">
          <source src={getVideoUrl(videoName)} type="video/mp4" />
        </video>

        <Overlay>
          <VideoSubHeaderText>
            <h2>Counter-Strike 2:</h2>
          </VideoSubHeaderText>

          <VideoHeaderText>
            <h1>{title}</h1>
          </VideoHeaderText>

          <PlayButton>
            <img src={playButton} alt="play video icon" />

            <h3>Reproduzir vídeo</h3>
          </PlayButton>
        </Overlay>
      </VideoContainer>
    </Container>
  );
};

export default MainVideo;
