import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Card = styled.div`
  width: 15vw;
  height: 50vh;
  object-fit: cover;
  min-width: 200px;
  border-radius: 15px;

  position: relative;
  display: flex;
  flex-direction: column;

  ${theme.devices.tablet} {
    height: 17rem;
  }
  ${theme.devices.mobile} {
    width: 10rem;
    height: 14rem;
    min-width: 120px;
  }

  img {
    border-left: 1px solid ${theme.colors.mono.light_1};
    border-top: 1px solid ${theme.colors.mono.light_1};
    width: 100%;
    height: 95%;
    border-radius: inherit;
    box-shadow: 2rem 1.3rem 0px ${theme.colors.main.purple.dark_1};

    ${theme.devices.tablet} {
      box-shadow: 1.6rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
    ${theme.devices.mobile} {
      box-shadow: 1.2rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
  }

  .recipeName {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 5px;
    font-weight: 500;

    ${theme.devices.mobile} {
      font-size: 1rem;
    }
  }
`;

export const RecipeName = styled.div``;
