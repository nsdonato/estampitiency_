import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
 /* Layout */
html,
body {
  margin: 0;
  height: 100%;
  background-color: whitesmoke;
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

#root {
  max-width: 1250px;
  min-height: 100vh;
  margin: auto;
  background-color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: black;
}
`;
export default GlobalStyles;
