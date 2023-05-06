import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 1300px;
  background-image: url("/src/assets/images/bg-dark-blue.svg");
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-bottom: 100px;
  background-color: #5a5f76;

  > p {
    max-width: 650px;

    text-align: justify;
    font-size: 22.5px;
    line-height: 120%;

    color: rgba(255, 255, 255, 0.94);
  }

  > video {
    margin: 30px 0px;
    padding: 40px 30px;
  }
`;

export const HeaderText = styled.h2`
  margin: 60px auto 0 auto;

  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.94);
`;
