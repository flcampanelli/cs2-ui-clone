import React from "react";

import { getImageUrl } from "../../utils/functions";
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
