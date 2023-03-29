import styled, { css } from "styled-components";
import { theme } from "@/constant/theme";

// MyPageUser.tsx
export const MyPageUser = styled.div`
  ${theme.devices.desktop} {
    margin-left: 3rem;
  }

  ${theme.devices.tablet} {
    margin-left: 0rem;
  }

  ${theme.devices.mobile} {
  }
`;

export const HoverGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;

  ${theme.devices.tablet} {
    grid-template-columns: 1.5fr 5fr;
  }
`;

export const HoverImageContainer = styled.div`
  display: grid;
  align-items: center;
`;

export const HoverImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

// MyPageAccordian.tsx
export const MyPageAccordian = styled.div`
  ${theme.devices.desktop} {
    margin-right: 3rem;
  }

  ${theme.devices.tablet} {
    margin-right: 0rem;
    margin-bottom: 3rem;
  }

  ${theme.devices.mobile} {
  }
`;

// MyPageFlavorData.tsx
// 맛 표현, 캐릭터, HoverIcon css
export const FlavorDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  margin-top: 5px;

  ${theme.devices.tablet} {
    grid-template-columns: 1fr 4fr;
  }
`;

export const FlavorDataImageContainer = styled.div`
  /* position: relative; */
  display: grid;
  place-items: center;
  height: 100px;

  & img {
    width: 40px;
    height: auto;
  }
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

export const HoverIconText = styled.div`
  font-size: 14px;
  color: ${theme.colors.mono.light_1};
`;

// MyPageFlavorData.tsx의 Data 부분 css
export const FlavorDataValueContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  /* align-items: center; */
  height: fit-content;
  /* width: 100%; */
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

  ${theme.devices.tablet} {
    width: 2.5vw;
  }
`;

export const ButtonContainer = styled.button`
  color: ${theme.colors.mono.light_1};
  border: none;
  background-color: ${theme.colors.main.blue};
  /* font-size: 1.5rem; */
  padding: 0.5rem 1rem;
  min-width: 5rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.main.skyblue};
  }

  ${theme.devices.tablet} {
    /* font-size: 1rem; */
    min-width: 5vw;
  }
`;
