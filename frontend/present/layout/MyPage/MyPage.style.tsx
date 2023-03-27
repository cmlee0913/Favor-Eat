import styled from "styled-components";
import { theme } from "@/action/theme";

export const MyPageUser = styled.div`
  ${theme.devices.desktop} {
    /* margin-left: 40px; */
  }

  ${theme.devices.tablet} {
    margin-left: 0px;
    margin-top: 5.5rem;
  }

  ${theme.devices.mobile} {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;

export const MyPageUserMent = styled.div`
  background-color: ${theme.colors.background.violet};
  padding: 10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  div {
    :nth-child(1) {
      margin-left: 20px;
      font-size: 30px;
    }
    :nth-child(2) {
      margin-left: 20px;
      font-size: 20px;
    }
  }
`;

export const FlavorDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const FlavorDataImageContainer = styled.div`
  display: grid;
  place-items: center;
  /* height: auto; */
`;

export const FlavorDataValueContainer = styled.div`
  display: grid;
  place-items: center;
`;
