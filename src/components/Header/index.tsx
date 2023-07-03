import React from "react";

import {
  Container,
  Content,
  Figure,
  HeaderImageContainer,
  Subtitle,
  headerCtt,
  logoCsFullBlack,
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
          <img src={headerCtt} width="932" height="710" alt="" />

          <img src={logoCsHeader} width="556" height="114" alt="" />

          <Subtitle>
            <h2>TESTE LIMITADO</h2>
          </Subtitle>
        </HeaderImageContainer>
      </Content>
    </Container>
  );
};

export default Header;
