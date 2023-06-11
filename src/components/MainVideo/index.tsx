import React from "react";

import {
  Container,
  VideoContainer,
  Overlay,
  VideoSubHeaderText,
  VideoHeaderText,
  PlayButton,
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
          <source
            src={`/src/assets/videos/${videoName}.mp4`}
            type="video/mp4"
          />
        </video>

        <Overlay>
          <VideoSubHeaderText>
            <h2>Counter-Strike 2:</h2>
          </VideoSubHeaderText>

          <VideoHeaderText>
            <h1>{title}</h1>
          </VideoHeaderText>

          <PlayButton>
            <img
              src="/src/assets/icons/play-button.svg"
              alt="play video icon"
            />

            <h3>Reproduzir vídeo</h3>
          </PlayButton>
        </Overlay>
      </VideoContainer>
    </Container>
  );
};

export default MainVideo;
