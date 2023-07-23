import React from "react";

import { Container, SubIntro } from "./styles";
import { getVideoUrl } from "../../utils/functions";

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
        autoPlay
        muted
        loop
        preload="auto"
        style={{ padding: "50px", width: "58%" }}
      >
        <source src={getVideoUrl(videoName)} type="video/mp4" />
      </video>

      <SubIntro>
        <h3>{title}</h3>

        <p>{description}</p>
      </SubIntro>
    </Container>
  );
};

export default VideoRow;
