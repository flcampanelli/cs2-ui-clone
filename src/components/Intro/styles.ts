import { getImageUrl } from "../../utils/functions";
import styled from "styled-components";

const bgDarkBlue = getImageUrl("bg-dark-blue.svg");

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 572px;
  background-image: url(${bgDarkBlue});
  background-size: cover;
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 950px;
  height: 333px;
  padding: 50px 60px;
  background-color: #272a3b;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  font-size: 38px;
  line-height: 102%;
  color: rgba(255, 255, 255, 0.95);

  margin-bottom: 20px;

  & > span {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    margin: 0 8px;
  }
`;

export const Description = styled.div`
  margin-top: 5px;

  font-size: 19.5px;
  line-height: 120%;
  text-align: justify;
  /* word-spacing: 2px; */

  & > p {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }

  & > p:not(:nth-child(4)) {
    margin-bottom: 25px;
  }
`;
