import styled from "styled-components";

interface ContainerProps {
  reverse?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;

  width: 100%;
  padding: 0 75px;
`;

export const SubIntro = styled.div`
  max-width: 400px;

  > h3 {
    margin-bottom: 10px;

    font-size: 24px;
    font-weight: 700;
  }

  > p {
    font-size: 22px;
    color: rgba(17, 17, 17, 0.5647058824);
  }
`;
