import { theme } from "@/constant/theme";
import styled from "styled-components";

const borderRadiusStyle = 20;

//PC
export const PcContainer = styled.div`
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
  padding: 0 2rem;

  ${theme.devices.tablet} {
    border-radius: 0 0 0 0;
    height: 10%;
    top: 0;
  }

  /* title */
  & div:first-child {
    font-size: 1.3rem;
    font-family: Pretendard-Bold;

    color: ${theme.colors.mono.light_1};
  }
`;

export const NextButton = styled.div`
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${theme.colors.mono.light_1};
  position: relative;

  :hover {
    cursor: pointer;
  }

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: inherit;
    path {
      fill: ${theme.colors.main.purple.dark_1};
    }
  }

  ${theme.devices.tablet} {
    width: 2rem;
    height: 2rem;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 0.1rem;
  }
`;

export const PcBody = styled.div`
  height: 75%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  padding: 0 1vw;
  grid-template-columns: 1fr 3fr 1fr 3fr;

  & > .row {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: stretch;
    align-items: center;
    margin-right: 5px;
  }
`;

export const FlavorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 3%;

  .characterTitle {
    text-align: center;
    font-family: Pretendard-Medium;
  }
`;

export const RatingWrapper = styled.div`
  font-size: 0.85rem;
  font-family: Pretendard-Bold;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;

  ${theme.devices.tablet} {
    font-size: 1.1rem;
    font-weight: 600;
    gap: 3%;
  }
`;

export const ValueText = styled.span<{ type: string }>`
  font-size: 0.95rem;
  font-family: Pretendard-Bold;
  margin-bottom: 0.3rem;
  text-align: center;

  span {
    width: 0.1rem;
    color: ${({ type }) => theme.colors.character[type]};
  }
`;

//Mobile
export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.main.purple.light_1};
`;

export const ChracterContainer = styled.div`
  height: fit-content;
  min-height: 30%;
  width: 100%;
  display: grid;
  box-sizing: border-box;
  padding: 0.5rem;
  grid-template-columns: 1.5fr 2fr;
  background-color: ${theme.colors.mono.light_1};

  & > div:first-child {
    justify-self: center;
  }

  & > .characters {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Character = styled.div`
  display: grid;
  height: 100%;
  align-content: stretch;
  position: relative;

  /* character title*/
  .title {
    font-size: 1.2rem;
    font-family: Pretendard-Medium;

    ${theme.devices.mobile} {
      font-size: 1rem;
    }
  }

  img {
    width: 2.5rem;
    height: auto;

    ${theme.devices.mobile} {
      width: 30%;
    }
  }

  .value {
    font-size: 1.1rem;
    font-family: Pretendard-Mideum;

    ${theme.devices.mobile} {
      font-size: 0.9rem;
    }

    /* 단계 */
    span {
      margin: 0 2px;
    }
  }

  .hover {
    border-radius: 100%;
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${theme.colors.characterLevel.spicy.level_1};
    color: ${theme.colors.mono.light_1};
    position: absolute;
    left: 0;
    ${theme.devices.mobile} {
      width: 1.1rem;
      height: 1.1rem;
    }
    :hover {
      cursor: pointer;
    }

    /* ? */
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;
      font-size: 0.85rem;
      font-family: Pretendard-Bold;

      ${theme.devices.tablet} {
        font-size: 1rem;
      }
    }
  }

  .character {
    gap: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  height: 90%;
  width: 60%;
  min-width: 200px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 1%;
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;

  ${theme.devices.tablet} {
    height: 100%;
    width: 60%;
    max-height: 35vh;
  }

  ${theme.devices.mobile} {
    min-width: 100px;
    height: 100%;
    width: 60%;
  }

  div {
    text-align: center;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-family: Pretendard-Bold;

    ${theme.devices.mobile} {
      font-size: 0.9rem;
    }
  }

  img {
    background-color: black;
    object-fit: scale-down;
    display: block;
    width: 100%;
    border-radius: inherit;

    ${theme.devices.tablet} {
      max-height: 19.5vh;
    }
  }
`;

export const RatingContainer = styled.div`
  margin-top: 5%;
  height: 55%;
  background-color: ${theme.colors.mono.light_1};
  display: grid;
  gap: 5%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
`;

export const Button = styled.div`
  background-color: inherit;
  justify-self: center;
  background-color: ${theme.colors.mono.light_1};
  display: inline-block;
`;
