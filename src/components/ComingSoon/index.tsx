import React from "react";

import { Container, Content, Description, HeaderText } from "./styles";

const ComingSoon: React.FC = () => {
  return (
    <Container>
      <Content>
        <Description>
          <HeaderText>Não é só isso</HeaderText>

          <p>
            O Teste Limitado existe para avaliar um subconjunto dos recursos do
            Counter-Strike 2. Dessa forma, problemas graves poderão ser
            resolvidos antes do lançamento. Mas ainda há muito mais por vir. Nos
            próximos meses, revelaremos todos os detalhes do Counter-Strike 2, e
            mal podemos esperar para compartilhar tudo com vocês.
          </p>
        </Description>
      </Content>
    </Container>
  );
};

export default ComingSoon;
