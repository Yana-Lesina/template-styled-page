import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, 
    *:: before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f5f5f5;
        font-family: Inter;
        font-weight: 500;
    }
`;