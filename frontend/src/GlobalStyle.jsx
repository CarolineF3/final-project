import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 14px;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  main {
    background-color: #FEF9F5;
    color: #373737;
  }

  h1 {
    font-family: "Engagement", cursive;
    font-size: 1.75rem;
    color: #AD5729;
  }

  h2 {
    font-size: 1.375rem;
    font-weight: normal;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
  }

`;

export default GlobalStyle;
