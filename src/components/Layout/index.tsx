import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";
import Intro from "../Intro";
import Smokes from "../Smokes";
import Ticks from "../Ticks";
import Maps from "../Maps";
import Inventory from "../Inventory";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Intro />
      <Smokes />
      <Ticks />
      <Maps />
      <Inventory />
    </Container>
  );
};

export default Layout;
