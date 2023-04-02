import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 30%;
  right: 9%;
  z-index: 50;

  ${theme.devices.tablet} {
    top: 25%;
    left: 7%;
  }
`;

export const GuideText = styled.div`
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: "Pretendard-SemiBold";

  ${theme.devices.tablet} {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  ${theme.devices.mobile} {
    font-size: 200%;
  }
`;

export const ButtonWrapper = styled.div`
  background-color: ${theme.colors.main.blue};
  width: fit-content;
  padding: 20px 30px;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${theme.devices.tablet} {
    padding: 15px 25px;
  }
  ${theme.devices.mobile} {
    padding: 10px 20px;
  }

  & > div {
    font-size: 1.5rem;
    margin-left: 5px;
    font-family: "Pretendard-Bold";
    color: ${theme.colors.mono.light_1};
    ${theme.devices.tablet} {
      font-size: 2rem;
      margin-left: 4px;
    }
    ${theme.devices.mobile} {
      font-size: 150%;
      margin-left: 4px;
    }
  }

  .PC {
    ${theme.devices.desktop} {
      display: block;
    }
    ${theme.devices.tablet} {
      display: none;
    }
  }
  .Mobile {
    ${theme.devices.desktop} {
      display: none;
    }
    ${theme.devices.tablet} {
      display: block;
    }
  }
`;

export const ButtonName = styled.div``;
