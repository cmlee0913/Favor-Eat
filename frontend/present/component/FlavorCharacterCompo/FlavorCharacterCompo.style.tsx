import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${theme.devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 90%;
  height: auto;
`;

export const Title = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
`;

export const Character = styled.div`
  ${theme.devices.desktop} {
    width: 30px;
    height: 35px;
  }
  img {
    width: inherit;
    height: inherit;
  }
`;

export const FlavorLevel = styled.span`
  font-size: 0.85rem;
`;

export const HoverIconWrapper = styled.div`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  background-color: ${theme.colors.characterLevel.spicy.level_1};
  display: inline-block;
  text-align: center;
  position: relative;
  bottom: 3px;
  right: -5px;
  align-self: end;

  ${theme.devices.tablet} {
    align-self: center;
    bottom: 0;
    right: 0;
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
