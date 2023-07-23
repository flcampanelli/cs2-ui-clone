import React, { useMemo, useState } from "react";

import YouTubePlayer from "../YotubePlayer";
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
  const [playing, setPlaying] = useState(false);

  return (
    <Container>
      <VideoContainer onClick={() => setPlaying(!playing)}>
        {playing ? (
          <YouTubePlayer
            videoId="_y9MpNcAitQ"
            onStateChange={() => setPlaying(!playing)}
          />
        ) : (
          <>
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              preload="auto"
            >
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
          </>
        )}
      </VideoContainer>
    </Container>
  );
};

export default MainVideo;
