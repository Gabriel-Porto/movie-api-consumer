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
  width: 100vw;
}

body {
  background-color: #f3f4f6;
  color: #1f2937;
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
