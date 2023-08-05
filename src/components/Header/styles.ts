import { getImageUrl } from "../../utils/functions";
import styled from "styled-components";

export const logoCsFullBlack = getImageUrl("logo-cs-full-blk.svg");

export const headerCtt = getImageUrl("header-ctt.png");

export const logoCsHeader = getImageUrl("logo-cs2-header.svg");

const cs2HeaderBg = getImageUrl("cs2-header-bg.svg");

export const Container = styled.div`
  background-image: url(${cs2HeaderBg});
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
  min-height: 930px;
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

  @media (max-width: 1530px) {
    right: 0px;
    left: 0;
    justify-content: center;
  }

  img:nth-child(1) {
    @media (max-width: 1530px) {
      margin-top: 20px;
    }
  }

  img:nth-child(2) {
    position: absolute;
    top: 145px;
    right: 200px;

    @media (max-width: 1530px) {
      top: -145px;
      right: 0px;
      left: 0;
      margin: auto;
    }
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

  @media (max-width: 1530px) {
    top: -25px;
    right: 0px;
    left: 0;
    margin: auto;
  }
`;
