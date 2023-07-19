import React from "react";
import ReactCompareImage from "react-compare-image";

import { getImageUrl } from "../../utils/functions";
import { Container, Header, CompareImageWrapper, ImageLabel } from "./styles";

interface CompareSliderProps {
  headerText: string;
  bodyText: string;
  exampleMap: string;
  leftImageName: string;
  rightImageName: string;
  children: JSX.Element | JSX.Element[];
}

const CompareSlider: React.FC<CompareSliderProps> = ({
  headerText,
  bodyText,
  exampleMap,
  leftImageName,
  rightImageName,
  children,
}) => {
  // function getImageUrl(imageName: string) {
  //   return new URL(`../../assets/images/${imageName}.jpg`, import.meta.url)
  //     .href;
  // }

  return (
    <Container>
      <Header>{headerText}</Header>

      <h4>{bodyText}</h4>

      <p>
        Mapa de exemplo: <b>{exampleMap}</b>
      </p>

      <CompareImageWrapper>
        <ReactCompareImage
          leftImage={getImageUrl(leftImageName)}
          rightImage={getImageUrl(rightImageName)}
        />

        <ImageLabel left>CS2</ImageLabel>
        <ImageLabel>CS:GO</ImageLabel>
      </CompareImageWrapper>

      {children}
    </Container>
  );
};

export default CompareSlider;
