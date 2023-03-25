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
  background-color: ${theme.colors.main.purple.light_1};

  & > div {
    background-color: ${theme.colors.main.purple.light_1};
    position: relative;
  }
  padding: 3vh 0;
`;

export const CardContainer = styled.div<{ editable: boolean }>`
  background-color: ${theme.colors.main.purple.light_1};
  flex-direction: row;
  ${FlexCenter}
  justify-content: center;
  gap: ${({ editable }) => (editable ? "9vw" : "")};
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;
  transform: ${({ editable }) => (editable ? "translateX(-50%)" : "reset")};

  left: ${({ editable }) => (editable ? "50%" : "0%")};

  /* left, top 위치만  */
  & .card {
    margin: ${({ editable }) => (editable ? "0 0" : "0 6vw")};
    & > img {
      box-shadow: ${({ editable }) => {
        if (editable === false) {
          return "none";
        }
        return;
      }};
    }
  }
`;

export const EvaluateBoxWrapper = styled.div<{ editable: boolean }>`
  /* position: ${({ editable }) => (editable ? "absolute" : "relative")}; */
  /* transition: all 0.4s linear; */
  /* right: ${({ editable }) => (editable ? "-1000px" : "0")}; */
  height: 100%;
  flex-grow: 2;
  margin: 0 5% 0 2%;
  position: relative;
  display: ${({ editable }) => (editable ? "none" : "block")};
`;

export const Button = styled.button<{ show: boolean }>`
  ${FlexCenter}
  border : none;
  flex-direction: column;
  background-color: transparent;
  gap: 10px;

  display: ${({ show }) => (show ? "flex" : "none")};

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
