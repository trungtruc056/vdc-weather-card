import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
      font-size: 12px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

`;
