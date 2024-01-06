import React from "react";

import AnimatedElement from "../AnimatedElement";

import {
  Container,
  Content,
  Figure,
  HeaderImageContainer,
  Subtitle,
  logoCsFullBlack,
  headerCtt,
  logoCsHeader,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Figure>
          <img src={logoCsFullBlack} width="300" height="70" alt="cs logo" />
        </Figure>

        <HeaderImageContainer>
          <img
            src={headerCtt}
            width="932"
            height="710"
            alt=""
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          />

          <img
            src={logoCsHeader}
            width="556"
            height="114"
            alt=""
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          />

          {/* <Subtitle>
            <h2>TESTE LIMITADO</h2>
          </Subtitle> */}
        </HeaderImageContainer>
      </Content>
    </Container>
  );
};

export default Header;
