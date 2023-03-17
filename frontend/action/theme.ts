import { DefaultTheme } from "styled-components";

const colors = {
  main: {
    pink: "#f9afc7",
    red: "#f47676",
    yellow: "#ffcc66",
    skyblue: "#54bddd",
    blue: "#4340b5",
  },
  mono: {
    light_1: "#ffffff",
    light_2: "#e8eaef",
    light_3: "#d1d5e0",
    dark_1: "#abafc4",
    dark_2: "#33314a",
  },
  background: {
    pink: "#FFF3F5",
    violet: "#EBEBFF"
  }
};

const trans = "all 0.5s ease-out";

const devices = {
  mobile: `@media only screen and (max-width: 426px)`,
  tablet: `@media only screen and (max-width: 769px)`,
  desktop: `@media only screen and (max-width: 2000px)`,
};

export const theme = {
  colors,
  devices,
  trans,
};
