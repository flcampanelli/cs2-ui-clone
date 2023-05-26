import React from "react";

import Header from "../Header";

import { Container, Wrapper } from "./styles";
import Intro from "../Intro";
import Smokes from "../Smokes";
import Ticks from "../Ticks";
import Maps from "../Maps";
import Inventory from "../Inventory";
import VisualEffects from "../VisualEffects";
import Audio from "../Audio";
import ComingSoon from "../ComingSoon";
import RootFooter from "../RootFooter";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Intro />
      <Smokes />
      <Ticks />
      <Maps />
      <Inventory />
      <VisualEffects />
      <Audio />
      <ComingSoon />
      <RootFooter />
    </Container>
  );
};

export default Layout;
