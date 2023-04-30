import styled from "styled-components";

interface ImageLabelProps {
  left?: boolean;
}

export const Container = styled.div`
  width: 900px;
  height: 785px;
  padding: 40px;
  margin: 20px 0px;
  background-color: rgba(0, 0, 0, 0.12);

  > h4,
  p {
    font-weight: medium;
    text-align: left;
    color: rgba(17, 17, 17, 0.56);
  }

  > h4 {
    font-size: 22px;
  }

  > p {
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  b {
    font-weight: 700;
    color: rgba(17, 17, 17, 0.5);
  }
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CompareImageWrapper = styled.div`
  position: relative;
`;

export const ImageLabel = styled.div<ImageLabelProps>`
  position: absolute;
  bottom: 50px;
  left: ${(props) => (props.left ? "125px" : "none")};
  right: ${(props) => (props.left ? "none" : "125px")};

  background: #fff;

  color: #111;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 2px 10px;
`;
