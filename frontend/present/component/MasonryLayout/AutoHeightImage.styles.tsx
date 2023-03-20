import styled from "styled-components";

export const AutoHeightImageWrapper = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;
