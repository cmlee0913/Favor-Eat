import styled from "styled-components";
import { theme } from "@/action/theme";

export const MyPageUser = styled.div`
  padding-top: 30px;

  ${theme.devices.desktop} {
    margin-left: 40px;
  }

  ${theme.devices.tablet} {
    margin-left: 40px;
  }

  ${theme.devices.mobile} {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;

export const FlavorDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const FlavorDataImageContainer = styled.div`
  display: grid;
  place-items: center;
  height: auto;
`;

export const FlavorDataValueContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const MyPageAccordian = styled.div``;
