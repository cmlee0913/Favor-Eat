import styled from "styled-components";
import { theme } from "@/action/theme";

export const InfoMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.5fr 0.8fr 0.8fr 0.8fr;
  place-items: center;

  height: 300px;

  padding-top: 30px;

  & div {
    height: 25px;
  }

  & div.title {
    font-size: 30px;
    font-weight: bold;
    place-items: start;

    display: grid;
  }

  & div.job {
    display: grid;
    text-align: center;
    align-items: center;
    font-weight: bold;
    background-color: ${theme.colors.background.violet};
    height: 50px;
    border-radius: 10px;
    width: 80%;
  }

  ${theme.devices.desktop} {
    margin-left: 40px;
  }

  ${theme.devices.tablet} {
    margin-left: 30px;
    margin-right: 30px;
  }

  ${theme.devices.mobile} {
    margin-left: 20px;
    margin-right: 20px;
    /* margin-bottom: 30px; */
  }
`;

export const Accordians = styled.div`
  & div.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ${theme.devices.desktop} {
    padding-top: 30px;
    margin-right: 40px;
  }

  ${theme.devices.tablet} {
    margin-left: 40px;
  }

  ${theme.devices.mobile} {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
