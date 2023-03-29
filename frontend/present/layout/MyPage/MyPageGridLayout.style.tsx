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
    display: flex;
    flex-direction: column-reverse;
    gap: 0rem;
  }

  ${theme.devices.mobile} {
  }
`;
