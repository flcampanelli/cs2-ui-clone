import styled from "styled-components";

interface ContainerProps {
  contentMinHeight: string;
  backgroundImage: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: ${({ contentMinHeight }) => contentMinHeight};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
