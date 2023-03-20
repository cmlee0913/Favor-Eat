import { theme } from "@/action/theme";
import styled from "styled-components";

export const Content = styled.div`
    ${theme.devices.tablet} {
        #accordian {
            display: none;
        }
    }
`