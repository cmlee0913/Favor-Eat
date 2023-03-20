import { theme } from "@/action/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: calc(100% - 3rem);
  gap: 3rem;
  padding: 1rem 1.5rem;

  & * {
    min-width: 0px;
  }

  ${theme.devices.tablet} {
    display: block;
    padding: 0;
    gap: 0;
    width: 100%;
  }
`;
