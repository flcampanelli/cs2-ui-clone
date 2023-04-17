import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";
import Intro from "../Intro";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Intro />
    </Container>
  );
};

export default Layout;
