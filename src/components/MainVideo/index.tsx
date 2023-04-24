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
}

const MainVideo: React.FC<MainVideoProps> = ({ title }) => {
  return (
    <Container>
      {/* <iframe
          width="100%"
          height="620"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Counter-Strike 2: Responsive Smokes"
          src="https://www.youtube.com/embed/_y9MpNcAitQ?autoplay=0&amp;showinfo=0&amp;autohide=1&amp;fs=1&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;iv_load_policy=3&amp;controls=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.counter-strike.net&amp;widgetid=1"
          id="widget2"
        ></iframe> */}

      <VideoContainer>
        <video width="100%" height="100%" autoPlay muted loop preload="auto">
          <source src="/src/assets/videos/video_smokes.mp4" type="video/mp4" />
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
