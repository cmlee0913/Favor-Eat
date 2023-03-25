import { theme } from "@/action/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
`;

export const RatingShapeStyle = css`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Rating = styled.span<{
  characterType: string;
  active: boolean;
}>`
  width: 1.3vw;
  height: 100%;
  display: inline-block;
  & > svg {
    ${RatingShapeStyle}

    path {
      fill: ${({ characterType, active }) =>
        active ? theme.colors.character[characterType] : ""};
    }
  }
`;
