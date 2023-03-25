import { theme } from "@/action/theme";
import styled from "styled-components";

const borderRadiusStyle = 20;

export const Container = styled.div`
  background-color: ${theme.colors.mono.light_1};
  border-radius: ${borderRadiusStyle}px;

  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  height: 25%;
  top: 50%;
  border-radius: ${borderRadiusStyle}px ${borderRadiusStyle}px 0 0;
  background-color: ${theme.colors.main.purple.dark_1};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem;

  /* title */
  & div:first-child {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${theme.colors.mono.light_1};
  }
`;

export const Body = styled.div`
  height: 75%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  padding: 0 2vw;
  grid-template-columns: 1fr 3fr 1fr 3fr;

  & > .row {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: stretch;
    align-items: center;
  }
`;

export const FlavorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 5%;
`;

export const RatingWrapper = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ValueText = styled.span<{ type: string }>`
  font-size: inherit;
  font-weight: inherit;

  span {
    width: 0.1rem;
    color: ${({ type }) => theme.colors.character[type]};
  }
`;
