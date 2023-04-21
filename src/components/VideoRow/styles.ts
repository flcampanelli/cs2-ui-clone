import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;

  width: 100%;
  padding: 0 75px;
`;

export const SubIntro = styled.div`
  max-width: 400px;

  > h3 {
    margin-bottom: 10px;

    font-size: 24px;
    font-weight: 700;
  }

  > p {
    font-size: 22px;
    color: rgba(17, 17, 17, 0.5647058824);
  }
`;
