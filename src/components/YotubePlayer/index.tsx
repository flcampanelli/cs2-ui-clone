import React, { useEffect } from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
  onStateChange: any;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  onStateChange,
}) => {
  const onPlayerStateChange = (event: { target: any; data: number }) => {
    if (event.data === 2) {
      setTimeout(onStateChange, 500);
    }
  };

  const opts: any = {
    height: "620px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onStateChange={onPlayerStateChange}
    />
  );
};

export default YouTubePlayer;
