import React from "react";

import { Container, SubIntro } from "./styles";

interface VideoRowProps {
  title: string;
  description: string;
  reverse?: boolean;
}

const VideoRow: React.FC<VideoRowProps> = ({ title, description, reverse }) => {
  return (
    <Container reverse={reverse}>
      <div
        style={{
          width: "550px",
          height: "437px",
          padding: "50px",
        }}
      >
        <div
          style={{ width: "100%", height: "100%", background: "gray" }}
        ></div>
      </div>

      <SubIntro>
        <h3>{title}</h3>

        <p>{description}</p>
      </SubIntro>
    </Container>
  );
};

export default VideoRow;
