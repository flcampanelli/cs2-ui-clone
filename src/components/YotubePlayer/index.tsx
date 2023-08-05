import React from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
  onPause: any;
  pausedTime: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  onPause,
  pausedTime,
}) => {
  const opts: any = {
    height: "620px",
    width: "1100px",
    playerVars: {
      start: pausedTime,
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onPause={onPause}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default YouTubePlayer;
