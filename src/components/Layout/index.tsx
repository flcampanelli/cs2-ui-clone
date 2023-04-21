import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";
import Intro from "../Intro";
import Smokes from "../Smokes";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Intro />
      <Smokes />
    </Container>
  );
};

export default Layout;
