import styled from "styled-components";

export const Cursorwrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index: 100;
  img {
    width: 3rem;
    height: 3rem;
  }
`;
