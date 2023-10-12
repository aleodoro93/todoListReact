import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;

}



body {
  background: url("/public/kurama.jpg");
  background-position: 50%;
  opacity: 100%;
  backdrop-filter: blur(20px);
  color: #F2F2F2;
  min-height: 100vh;
}

button {
  cursor: pointer;
}
`
