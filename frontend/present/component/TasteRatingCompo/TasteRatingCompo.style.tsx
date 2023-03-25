import { theme } from "@/action/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingShapeStyle = css`
  width: 20px;
  height: 35px;

  background-color: transparent;
`;

export const Rating = styled.div<{
  characterType: string;
  active: boolean;
}>`
  display: inline-block;
  & > svg {
    ${RatingShapeStyle}

    path {
      fill: ${({ characterType, active }) =>
        active ? theme.colors.character[characterType] : ""};
    }
  }
`;

export const SpicyLeft = styled.div`
  width: 20px;
  height: 35px;

  background-color: ${theme.colors.mono.light_2};
`;
