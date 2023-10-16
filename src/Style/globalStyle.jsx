import { createGlobalStyle } from "styled-components";
import Kages from "../../public/kages.png"

export const GlobalStyle = createGlobalStyle`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  

}





body {
  background-image: url(${Kages});
  background-repeat: no-repeat;
  background-size: cover;
  
  opacity: 100%;
  backdrop-filter: blur(5px);
  color: #F2F2F2;
  min-height: 100vh;
 
}

button {
  cursor: pointer;
}
`


