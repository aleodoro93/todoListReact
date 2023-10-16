import { createGlobalStyle } from "styled-components";
import Kages from "../../public/kages.png"
import NarutoFont from "../../public/njnaruto.ttf"


export const GlobalStyle = createGlobalStyle`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  

}


@font-face {
      font-family: "njnaruto";
      src: url(${NarutoFont}) format("truetype");
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


