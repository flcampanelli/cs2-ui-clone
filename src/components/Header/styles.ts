import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/src/assets/images/cs2-header-bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1600px;
  height: 930px;
  margin: 0 auto;
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 5px;
  padding-left: 24px;
`;

export const HeaderImageContainer = styled.div`
  display: flex;

  position: relative;

  width: 100%;
  margin-top: 145px;

  img:nth-child(2) {
    position: absolute;
    top: 145px;
    right: 200px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 275px;
  right: 250px;

  width: 204px;
  height: 34px;
  background: #1e202f;

  transform: skewX(-20deg);

  & > h2 {
    color: #e0881e;
    font-size: 22px;
    font-weight: 600;
    transform: skewX(+20deg);
  }
`;
