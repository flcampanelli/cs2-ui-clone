import React from "react";

import { Container, Content } from "./styles";

interface ContentBoxProps {
  children: JSX.Element | JSX.Element[];
  contentMinHeight: string;
  backgroundImage: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  contentMinHeight,
  backgroundImage,
}) => {
  function getImageUrl(imageName: string) {
    return new URL(`../../assets/images/${imageName}.svg`, import.meta.url)
      .href;
  }

  return (
    <Container
      backgroundImage={getImageUrl(backgroundImage)}
      contentMinHeight={contentMinHeight}
    >
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentBox;
