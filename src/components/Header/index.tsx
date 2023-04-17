import React from "react";

import {
  Container,
  Content,
  Figure,
  HeaderImageContainer,
  Subtitle,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Figure>
          <img
            src="/src/assets/images/logo-cs-full-blk.svg"
            width="300"
            height="70"
            alt="cs logo"
          />
        </Figure>

        <HeaderImageContainer>
          <img
            src="/src/assets/images/header-ctt.png"
            width="932"
            height="710"
            alt=""
          />

          <img
            src="/src/assets/images/logo-cs2-header.svg"
            width="556"
            height="114"
            alt=""
          />

          <Subtitle>
            <h2>TESTE LIMITADO</h2>
          </Subtitle>
        </HeaderImageContainer>
      </Content>
    </Container>
  );
};

export default Header;
