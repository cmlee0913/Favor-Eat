import styled from "styled-components";
import { theme } from "@/action/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.background.pink};

  ${theme.devices.tablet} {
    height: auto;
    background-size: "auto";
  }
`;

export const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & div {
    height: 50px;
  }

  & div.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & div.job {
    /* font-size: 20px; */
    font-weight: bold;
  }

  ${theme.devices.desktop} {
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  ${theme.devices.tablet} {
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  ${theme.devices.mobile} {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Accordians = styled.div`
  ${theme.devices.desktop} {
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }

  ${theme.devices.tablet} {
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }

  ${theme.devices.mobile} {
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
