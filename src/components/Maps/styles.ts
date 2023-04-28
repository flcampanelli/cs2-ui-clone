import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 4460px;
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
  padding-bottom: 100px;
  background-color: #eee;

  color: #111;

  & > h3 {
    max-width: 750px;

    margin-bottom: 30px;

    text-align: center;
    font-size: 26px;
    font-weight: 600;
    line-height: 100%;
  }

  & > p {
    max-width: 650px;

    text-align: justify;
    font-size: 22px;
  }
`;

export const HeaderText = styled.h2`
  margin: 60px auto 0 auto;

  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
`;
