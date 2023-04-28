import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";
import Intro from "../Intro";
import Smokes from "../Smokes";
import Ticks from "../Ticks";
import Maps from "../Maps";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Intro />
      <Smokes />
      <Ticks />
      <Maps />
    </Container>
  );
};

export default Layout;
