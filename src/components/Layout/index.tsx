import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper></Wrapper>
    </Container>
  );
};

export default Layout;
