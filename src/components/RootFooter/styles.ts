import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 94px;
  background: #000;

  > p {
    max-width: 800px;
    margin: 0 auto;

    text-align: center;
    font-size: 14.5px;
    font-weight: 600;
    color: #777;
  }
`;
