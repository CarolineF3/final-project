import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
    margin: 0;
    padding: 0;

    --primary-background-color: #fff9f8;
    --secondary-background-color: #fff;
    --tertiary-background-color: #f3dde2;

    --primary-btn-background-color: #e8bcc8;
    --primary-btn-color: #fff;

    --primary-font-color: #373737;
    --secondary-font-color: #ca97a6;
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
    background-color: var(--primary-background-color);
    color: var(--primary-font-color);
  }

  h1 {
    font-family: "Engagement", cursive;
    font-size: 1.75rem;
    font-weight: 300;
    color: var(--secondary-font-color);
    text-shadow: 0.5px 0.5px #6e525c;
  }

  h2 {
    font-size: 1.375rem;
    font-weight: normal;
    letter-spacing: 0.1em;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
    letter-spacing: 0.08em;
  }

  button {
    border-radius: 0;
    border: none;
    letter-spacing: 0.1em;
    cursor: pointer;
  }

`;

export default GlobalStyle;
