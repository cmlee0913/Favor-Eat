import { theme } from "@/constant/theme";
import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  position: absolute;
  background-color: ${theme.colors.mono.light_1};

  img {
    width: 15vw;
    height: auto;

    ${theme.devices.tablet} {
      width: 30vw;
      height: auto;
    }
  }
`;
