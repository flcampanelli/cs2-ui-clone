import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-bottom: 100px;
  background-color: #eee;

  color: #111;

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
