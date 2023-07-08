import React from "react";

import ContentBox from "../ContentBox";

import { Description, HeaderText, weapons } from "./styles";

const Inventory: React.FC = () => {
  return (
    <ContentBox contentMinHeight={"1300px"} backgroundImage={"bg-dark-blue"}>
      <Description>
        <HeaderText>Os seus itens sob uma nova luz</HeaderText>

        <p>
          Traga todo o seu inventário do CS:GO para o CS2. Não apenas você
          continuará com todos os itens que colecionou durante todos esses anos,
          como eles também se beneficiarão da iluminação e materiais da Source
          2.
        </p>

        <br />

        <p>
          Além de permitir manter modelos e revestimentos vindos do CS:GO, todas
          as armas padrão foram aprimoradas com modelos de alta resolução, e
          alguns revestimentos tiram proveito deles.
        </p>

        <video width="82%" autoPlay muted loop preload="auto">
          <source src={weapons} type="video/mp4" />
        </video>
      </Description>
    </ContentBox>
  );
};

export default Inventory;
