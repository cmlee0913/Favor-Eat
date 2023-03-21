import { theme } from "@/action/theme";
import styled from "styled-components";

export const MobileContent = styled.div`
    display: none;

    ${theme.devices.tablet} {
        display: block;
        margin: 2rem;
    }
`

export const Content = styled.div`
    ${theme.devices.tablet} {
        #accordian {
            display: none;
        }
    }
`