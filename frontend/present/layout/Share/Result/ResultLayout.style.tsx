import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  /* drag none */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ContentBox = styled.div`
  border-radius: 25px;
  background-color: ${theme.colors.mono.light_1};
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-family: Pretendard-Bold;

  ${theme.devices.tablet} {
    width: 75vw;
    gap: 1rem;
    top: 15%;
    padding: 1.5rem 2rem;
  }
  ${theme.devices.tablet} {
    width: 65vw;
  }

  /* title */
  & > span:first-child {
    font-size: 1.5rem;
  }
  /* image */
  & > div:nth-child(2) {
    img {
      width: 9rem;
      height: 9rem;

      ${theme.devices.tablet} {
        width: 7rem;
        height: 7rem;
      }

      ${theme.devices.mobile} {
        width: 5rem;
        height: 5rem;
      }
    }
  }
  /* sub-title */
  & > span:nth-child(3) {
    font-size: 1.3rem;
    color: ${theme.colors.main.purple.dark_3};
    margin-top: 0.5rem;
  }
  /* text */
  & > div:last-child {
    width: 70%;
    font-size: 1rem;
    overflow-y: auto;
    max-height: 15vh;

    ${theme.devices.tablet} {
      width: 85%;
    }

    ${theme.devices.mobile} {
      width: 100%;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${theme.colors.background.violet};
    }

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #b7b7ed;
    }
  }
`;

export const ButtonBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-family: Pretendard-Bold;

  & > div {
    width: 80%;
    padding: 1rem;
    border-radius: 25px;
    text-align: center;
  }

  /* kakao share button */
  & > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #ffe812;

    & > svg {
      width: 7%;
      height: auto;
    }
  }
  /* 로그인 버튼*/
  & > div:last-child {
    background-color: ${theme.colors.main.purple.dark_3};
    color: ${theme.colors.mono.light_1};
  }
`;
