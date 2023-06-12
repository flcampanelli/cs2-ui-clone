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

  > video {
    margin: 65px 0;
    outline: none;
    overflow: hidden;
    clip-path: inset(1.5px 1.5px);
  }
`;

export const HeaderText = styled.h2`
  margin: 60px auto 0 auto;

  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SubSectionText = styled.h4`
  margin-bottom: 10px;
  margin-top: 50px;

  font-size: 26px;
  font-weight: 700;
`;
