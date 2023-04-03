import { theme } from "@/constant/theme";
import { HambugerFont } from "@/types/Hambuger/dummy";
import styled from "styled-components";
import { fadeInUp } from "../Guide/Guide.style";

// width ratio
const PC = [472.75, 452.9, 488.6, 630, 365.73];
const Mobile = [83.8, 94.61, 79.4, 106.1, 81.83];

// balnk value
const PCblank = [0, 121.12, 0, 156.4, 0];
const MobileBlank = [-46.78, 46.24, -37.93, 41.8, -37.78];

// balnk Position
const MobileBlankPos = [0, "2rem", "-2rem", "4rem", "-4rem"];

// font location
const PCfont: Array<HambugerFont> = [
  { top: "-1.4rem", bottom: "auto", left: "auto", right: "4%" },
  { top: "auto", bottom: "1rem", left: "1%", right: "auto" },
  { top: "-1.4rem", bottom: "auto", left: "auto", right: "4%" },
  { top: "auto", bottom: "1rem", left: "2%", right: "auto" },
  { top: "-1.4rem", bottom: "auto", left: "auto", right: "25%" },
];
const Mobilefont: Array<HambugerFont> = [
  { top: "-1.6rem", bottom: "auto", left: "auto", right: "4%" },
  { top: "auto", bottom: "0.6rem", left: "5%", right: "auto" },
  { top: "-1.2rem", bottom: "auto", left: "auto", right: "2%" },
  { top: "auto", bottom: "0.6rem", left: "4%", right: "auto" },
  { top: "auto", bottom: "0.6rem", left: "auto", right: "5%" },
];

const calPosValPC = (num: number) => {
  return num / 400;
};

const calPosValMobile = (num: number) => {
  return num / 80;
};

export const Name = styled.div<{ idx: number }>`
  position: absolute;
  bottom: 0;
  color: ${theme.colors.main.blue};
  font-family: "Pretendard-Bold";
  font-size: 1.2rem;

  ${theme.devices.desktop} {
    top: ${(props) => PCfont[props.idx].top};
    bottom: ${(props) => PCfont[props.idx].bottom};
    left: ${(props) => PCfont[props.idx].left};
    right: ${(props) => PCfont[props.idx].right};
  }

  ${theme.devices.tablet} {
    top: ${(props) => Mobilefont[props.idx].top};
    bottom: ${(props) => Mobilefont[props.idx].bottom};
    left: ${(props) => Mobilefont[props.idx].left};
    right: ${(props) => Mobilefont[props.idx].right};
  }
`;

export const Menu = styled.div<{ idx: number }>`
  /* PC */
  --widthPC: calc((100vw - 5rem) / 5);
  --heightPC: calc((100vh - 20rem) / 5);
  --mainWidth: ${(props) => calPosValPC(PC[props.idx])};
  --subWidth: ${(props) => calPosValPC(PCblank[props.idx])};
  --defaultPC: calc(var(--mainWidth) * var(--widthPC));
  --positionPC: calc(
    ${(props) => props.idx} * var(--widthPC) - var(--subWidth) *
      var(--defaultPC) + 4.5rem
  );

  /* Tablet */
  --heightMobile: calc((100vh - 20rem) / 5);
  --mainHeight: ${(props) => calPosValMobile(Mobile[props.idx])};
  --subHeight: ${(props) => calPosValMobile(MobileBlank[props.idx] * 24)}vw;
  --defaultMobile: calc(var(--mainHeight) * var(--heightMobile));

  cursor: pointer;
  &:hover {
    width: calc(var(--defaultPC) + 2%);
  }

  ${theme.devices.desktop} {
    width: var(--defaultPC);
    position: absolute;
    left: var(--positionPC);
    top: calc(${(props) => props.idx} * var(--heightPC) + 11rem);
    margin: 0;
  }

  ${theme.devices.tablet} {
    height: var(--defaultMobile);
    position: relative;
    right: var(--subHeight);
    left: auto;
    top: auto;
    margin: ${(props) => MobileBlankPos[props.idx]};
  }

  & path:nth-last-child(2),
  & path:nth-last-child(1) {
    animation: ${fadeInUp} 1.8s;
  }

  & path {
    animation: ${fadeInUp} 1s;
  }
`;

export const InnerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: auto;
    object-fit: cover;

    svg {
      display: inline-block;
      height: 100%;
    }
  }
`;

export const InnerPC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: auto;
    object-fit: cover;

    svg {
      display: inline-block;
      height: 100%;
    }
  }
`;

export const Body = styled.div`
  &.Mobile {
    display: none;
  }

  ${theme.devices.tablet} {
    &.Mobile {
      display: block;
    }

    &.PC {
      display: none;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff3f5;
  width: calc(100vw - 6rem);
  height: calc(100vh - 11rem);
  padding: 5.5rem 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8999;

  ${theme.devices.tablet} {
    width: calc(100vw - 3rem);
    height: calc(100vh - 11rem);
    padding: 5.5rem 1.5rem;
  }
`;
