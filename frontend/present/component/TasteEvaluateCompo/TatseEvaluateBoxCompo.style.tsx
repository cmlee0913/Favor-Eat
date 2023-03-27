import { theme } from "@/action/theme";
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
  padding: 0 1.2rem;

  ${theme.devices.tablet} {
    border-radius: 0 0 0 0;
    height: 10%;
    top: 0;
  }

  /* title */
  & div:first-child {
    font-size: 1.3rem;
    font-weight: 700;
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
  margin: 10px 0;
  box-sizing: border-box;
  position: relative;

  img {
    object-fit: cover;
    width: inherit;
    height: calc(100% - 20px);
    position: absolute;
    border-radius: ${borderRadiusStyle}px;
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
  }
`;

export const RatingWrapper = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
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

  .rating {
  }
`;

export const ValueText = styled.span<{ type: string }>`
  font-size: inherit;
  font-weight: inherit;
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
  min-height: 33%;
  width: 100%;
  display: grid;
  box-sizing: border-box;
  padding: 1%;
  grid-template-columns: 1.5fr 2fr;
  background-color: ${theme.colors.mono.light_1};

  & > .characters {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Character = styled.div`
  display: grid;
  height: 100%;
  /* grid-template-columns: 0.5fr 3fr; */
  align-content: stretch;
  position: relative;

  /* character title*/
  .title {
    font-size: 1.2rem;

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
    font-size: 1.2rem;

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
      position: relative;
      top: 0;
      text-align: center;
      font-size: 0.85rem;

      ${theme.devices.tablet} {
        font-size: 1rem;
      }
    }
  }

  .character {
    gap: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  height: 90%;
  width: 90%;
  min-width: 200px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 1%;
  position: relative;

  ${theme.devices.mobile} {
    min-width: 150px;
  }

  div {
    text-align: center;
    margin-bottom: 5px;
    font-size: 1.2rem;

    ${theme.devices.mobile} {
      font-size: 0.9rem;
    }
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
  }

  .hoverInfo {
    object-fit: cover;
    height: 110%;
    position: absolute;
    top: 0;
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
