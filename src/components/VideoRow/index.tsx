import React from "react";

import { Container, SubIntro } from "./styles";

interface VideoRowProps {
  title: string;
  description: string;
  videoName: string;
  reverse?: boolean;
}

const VideoRow: React.FC<VideoRowProps> = ({
  title,
  description,
  videoName,
  reverse,
}) => {
  return (
    <Container reverse={reverse}>
      <video
        width="550"
        height="437"
        autoPlay
        muted
        loop
        preload="auto"
        style={{ padding: "50px" }}
      >
        <source src={`/src/assets/videos/${videoName}.mp4`} type="video/mp4" />
      </video>

      <SubIntro>
        <h3>{title}</h3>

        <p>{description}</p>
      </SubIntro>
    </Container>
  );
};

export default VideoRow;
