import { theme } from "@/action/theme";
import styled from "styled-components";

export const HoriSelector = styled.div`
`

export const Compo = styled.li<{ open: boolean; idx: number }>`
  display: inline-block;
  width: calc(25% - 4rem);
  padding: 1rem 2rem 1.5rem 2rem;
  text-align: center;
  background-color: ${(props) =>
    props.open ? theme.accordianColor[props.idx] : theme.colors.mono.light_1};
  color: ${(props) =>
    props.open ? theme.colors.mono.light_1 : theme.colors.mono.dark_1};
  border-radius: 0 0 1rem 1rem;
  position: relative;
  top: -1px;
  z-index: 1;
`;

export const ContainerNav = styled.ul<{ selectIdx: number }>`
  display: none;
  width: 100%;
  padding:0;
  margin: 0;

  ${theme.devices.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
