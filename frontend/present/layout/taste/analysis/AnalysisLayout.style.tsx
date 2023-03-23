import { theme } from "@/action/theme";
import styled, { css } from "styled-components";

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  gap: 3%;
  ${FlexCenter}
  flex-direction: column;
`;

//top
export const TopContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  ${theme.devices.tablet} {
    font-size: 1.2rem;
  }
  ${theme.devices.mobile} {
    font-size: 1rem;
  }
`;

export const Count = styled.div`
  font-size: 1.5rem;
  margin-top: 5px;

  ${theme.devices.tablet} {
    font-size: 1.2rem;
  }
  ${theme.devices.mobile} {
    font-size: 1rem;
  }
`;

//middle
export const MiddleContainer = styled.div`
  width: 100%;
  flex-direction: row;
  ${FlexCenter}
  gap: 9vw;
  padding: 3vh 0;
  background-color: ${theme.colors.main.purple.light_1};
`;

export const Button = styled.button`
  ${FlexCenter}
  border : none;
  flex-direction: column;
  background-color: transparent;
  gap: 10px;

  //icon
  & > svg {
    width: 9rem;
    height: 9rem;
    cursor: pointer;

    ${theme.devices.tablet} {
      width: 5rem;
      height: 5rem;
    }
    ${theme.devices.tablet} {
      width: 4rem;
      height: 4rem;
    }
  }

  & div {
    font-size: 1.5rem;

    ${theme.devices.tablet} {
      font-size: 1.1rem;
    }
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  text-align: center;

  font-size: 0.8rem;
  ${theme.devices.tablet} {
    font-size: 0.7rem;
  }
  ${theme.devices.mobile} {
    font-size: 0.6rem;
  }
`;
