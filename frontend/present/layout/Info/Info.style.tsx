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
    font-family: "Pretendard-Bold";
    font-size: 1.8rem;
  }
`;

export const InfoMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.2fr 0.8fr 0.8fr 0.8fr;
  place-items: center;

  height: 40vh;

  & div {
    height: 25px;

    &.job {
      display: grid;
      text-align: center;
      align-items: center;

      width: 80%;
      height: 50px;

      background-color: ${theme.colors.background.violet};
      border-radius: 10px;

      font-family: "Pretendard-SemiBold";
    }

    &.name {
      font-family: "Pretendard-Medium";
    }
  }

  & div.name {
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

export const InfoDataSource = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    :hover {
      cursor: pointer;
    }

    span {
      border-bottom: 2px solid ${theme.colors.mono.dark_3};
    }
  }
`;

export const InfoTechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .category {
    margin: 0.5rem 0;
  }
`;

export const InfoArchive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    :hover {
      cursor: pointer;
    }

    span {
      border-bottom: 2px solid ${theme.colors.mono.dark_3};
    }
  }
`;
