import { theme } from "@/constant/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* height: fit-content; */
  width: 100%;

  ${theme.devices.tablet} {
    justify-content: center;
  }

  & > span {
    width: 2.2rem;

    ${theme.devices.tablet} {
      width: 2rem;
    }
    ${theme.devices.mobile} {
      width: 1.8rem;
    }
  }
`;

export const RatingShapeStyle = css`
  width: 1.1rem;
  height: 100%;
  background-color: transparent;

  ${theme.devices.tablet} {
    width: 1rem;
  }
  ${theme.devices.mobile} {
    width: 0.9rem;
  }
`;

export const Rating = styled.span<{
  characterType: string;
  active: boolean;
}>`
  height: 100%;
  display: inline-block;
  & > svg {
    ${RatingShapeStyle}

    path {
      fill: ${({ characterType, active }) =>
        active ? theme.colors.character[characterType] : ""};
    }
  }

  ${theme.devices.tablet} {
    height: 100%;
  }
`;
