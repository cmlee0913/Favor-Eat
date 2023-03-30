import styled from "styled-components";
import { theme } from "@/constant/theme";

export const InfoMemberContainer = styled.div`
  ${theme.devices.desktop} {
    margin-left: 3rem;
  }

  ${theme.devices.tablet} {
    margin-left: 0rem;
  }

  ${theme.devices.mobile} {
  }

  & div.title {
    font-size: 30px;
    font-weight: bold;
    place-items: start;
  }
`;

export const InfoMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.5fr 0.8fr 0.8fr 0.8fr;
  place-items: center;

  height: 40vh;

  & div {
    height: 25px;
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
  }

  ${theme.devices.tablet} {
  }

  ${theme.devices.mobile} {
  }
`;

export const InfoAccodian = styled.div`
  ${theme.devices.desktop} {
    margin-right: 3rem;
  }

  ${theme.devices.tablet} {
    margin-right: 0rem;
    margin-bottom: 3rem;
  }

  ${theme.devices.mobile} {
  }
`;

export const InfoDataSource = styled.div``;

export const InfoTechStack = styled.div``;

export const InfoArchive = styled.div``;
