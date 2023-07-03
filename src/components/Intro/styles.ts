import styled from "styled-components";

const bgDarkBlue = new URL(
  "../../assets/images/bg-dark-blue.svg",
  import.meta.url
).href;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 938px;
  background-image: url(${bgDarkBlue});
  background-size: cover;
  /* background-position: center; */
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 650px;
  min-height: 698px;
  padding: 50px 60px;
  background-color: #4d526a;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
    margin: 0 auto;
    font-size: 53px;
    font-weight: 500;
    line-height: 102%;
    color: rgba(255, 255, 255, 0.95);
  }

  & > span:nth-child(2) {
    font-weight: 700;
  }
`;

export const Description = styled.div`
  margin-top: 5px;

  text-align: justify;
  font-size: 20px;
  line-height: 120%;

  & > p {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }

  & > p:not(:nth-child(4)) {
    margin-bottom: 25px;
  }
`;
