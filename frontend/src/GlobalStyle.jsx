import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    color: #5a6b74;
    font-family: "Quicksand", sans-serif;
}
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.875rem;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  main {
    background-color: #f7f5f0;
  }

  h1 {
    font-size: 1.75rem;
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
