import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 1px solid #FF6347;
}

html {
  /* 10px */
  font-size: 62.5%;
}

body {
  background-color: #1f2937;
  color: #f3f4f6;
  -webkit-font-smoothing: antialiased;
}

body,
text-area,
input,
button {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
