import { theme } from "@/action/theme";
import styled from "styled-components";

export const Card = styled.div`
  width: 15vw;
  height: 50vh;
  object-fit: cover;
  min-width: 200px;

  ${theme.devices.tablet} {
    height: 17rem;
  }
  ${theme.devices.mobile} {
    width: 10rem;
    height: 14rem;
    min-width: 120px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 2rem 1.3rem 0px ${theme.colors.main.purple.dark_1};

    ${theme.devices.tablet} {
      box-shadow: 1.6rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
    ${theme.devices.mobile} {
      box-shadow: 1.2rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
  }
`;
