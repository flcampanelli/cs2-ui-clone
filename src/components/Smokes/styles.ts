import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 2485px;
  background-image: url("/src/assets/images/bg-gray.svg");
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
  background: #eee;

  color: #111;

  & > p {
    max-width: 650px;

    font-size: 22px;
    text-align: justify;
  }
`;

export const HeaderText = styled.h2`
  margin: 60px auto 0 auto;
  font-size: 62px;
  font-weight: 700;
`;