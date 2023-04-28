import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 785px;
  padding: 40px;
  margin: 20px 0px;
  background-color: rgba(0, 0, 0, 0.12);

  > h4,
  p {
    color: rgba(17, 17, 17, 0.56);
    font-weight: medium;
    text-align: left;
  }

  > h4 {
    font-size: 22px;
  }

  > p {
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;
