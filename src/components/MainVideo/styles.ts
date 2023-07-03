import styled from "styled-components";

export const playButton = new URL(
  "../../assets/icons/play-button.svg",
  import.meta.url
).href;

export const Container = styled.div``;

export const VideoContainer = styled.div`
  position: relative;

  width: 100%;
  height: 620px;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 720px;
  margin-left: 50px;

  text-transform: uppercase;
`;

export const VideoSubHeaderText = styled.div`
  width: 100%;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5647058824);

  > h2 {
    font-size: 38px;
    font-weight: 700;
  }
`;

export const VideoHeaderText = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #111;

  > h1 {
    font-size: 90px;
    font-weight: bold;
    line-height: 80px;
    letter-spacing: 2.5px;
    color: #fff;
  }
`;

export const PlayButton = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;

  margin-top: 40px;

  > img {
    width: 52px;
    height: 52px;
  }

  > h3 {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;

    margin-left: 5px;
  }
`;
