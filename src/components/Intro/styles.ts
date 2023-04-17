import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 938px;
  background-image: url("/src/assets/images/bg-dark-blue.svg");
  background-size: cover;
  /* background-position: center; */
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 630px;
  min-height: 698px;
  padding: 50px 60px;
  background-color: #4d526a;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.95);

  & > span {
    margin: 0 auto;
    font-size: 42px;
    font-weight: normal;
  }

  & > span:nth-child(2) {
    font-weight: 600;
  }
`;

export const Description = styled.div`
  margin-top: 5px;

  text-align: justify;
  font-size: 17.5px;
  line-height: 145%;

  & > p {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.9);
  }
`;
