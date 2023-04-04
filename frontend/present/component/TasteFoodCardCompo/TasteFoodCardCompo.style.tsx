import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Card = styled.div`
  width: 17vw;
  height: 100%;
  min-width: 200px;
  border-radius: 15px;

  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.devices.tablet} {
    height: 17rem;
  }
  ${theme.devices.mobile} {
    width: 10rem;
    height: 14rem;
    min-width: 120px;
  }

  img {
    /* align-self: center; */
    object-fit: contain;
    background-color: black;
    max-height: 19rem;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 2rem 1.3rem 0px ${theme.colors.main.purple.dark_1};

    ${theme.devices.tablet} {
      height: 50%;
      box-shadow: 1.6rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
    ${theme.devices.mobile} {
      box-shadow: 1.2rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
  }

  .recipeName {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-self: flex-start;
    font-size: 1.5rem;
    margin-bottom: 5px;
    font-family: Pretendard-Regular;
    word-break: keep-all;

    ${theme.devices.mobile} {
      font-size: 1rem;
    }
  }
`;

export const RecipeName = styled.div``;
