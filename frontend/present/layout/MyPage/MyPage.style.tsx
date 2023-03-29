import styled, { css } from "styled-components";
import { theme } from "@/constant/theme";

export const HoverGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr;
`;

export const MyPageUser = styled.div`
  ${theme.devices.desktop} {
    /* margin-left: 40px; */
  }

  ${theme.devices.tablet} {
    margin-left: 0px;
    margin-top: 5.5rem;
  }

  ${theme.devices.mobile} {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;

export const MyPageUserMent = styled.div`
  background-color: ${theme.colors.background.violet};
  padding: 10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  div {
    :nth-child(1) {
      margin-left: 20px;
      font-size: 30px;
    }
    :nth-child(2) {
      margin-left: 20px;
      font-size: 20px;
    }
  }
`;

export const FlavorDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const FlavorDataImageContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: auto;

  & img {
    width: 40px;
    height: auto;
  }
`;

export const FlavorDataValueContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const HoverIconText = styled.div`
  font-size: 14px;
  color: ${theme.colors.mono.light_1};
`;

export const HoverIconWrapper = styled.div`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  background-color: ${theme.colors.characterLevel.spicy.level_1};
  text-align: center;

  position: relative;

  ${theme.devices.tablet} {
  }

  &:hover {
    cursor: pointer;

    .pc-hover {
      display: block;
    }
  }
`;

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

export const HoverImageWrapper = styled.div`
  img {
    display: block;
    /* position: absolute; */
    width: 100%;
    height: auto;
    left: 1.5vw;
  }
`;

export const Rating = styled.span<{
  characterType: string;
  active: boolean;
}>`
  width: 1.1vw;
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
