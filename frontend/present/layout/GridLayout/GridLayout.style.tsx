import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: calc(100% - 3rem);
  gap: 3rem;
  padding: 5.5rem 1.5rem 1rem 1.5rem;

  & * {
    min-width: 0px;
  }

  ${theme.devices.tablet} {
    display: block;
    padding: 0px;
    gap: 0;
    width: 100%;
  }

  &.Reverse {
    ${theme.devices.tablet} {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 5.5rem;
      width: 100%;
    }
  }
`;
