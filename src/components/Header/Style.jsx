import styled from "styled-components";

export const Cabecalho = styled.header`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 188px;
  position: relative;
  width: 100vw;

  h1 {
    @font-face {
      font-family: "njnaruto";
      src: url("./public/njnaruto.ttf") format("truetype");
    }
    font-family: "njnaruto", sans-serif;
  }
`;

export const FormNovaTarefa = styled.form`
  position: absolute;
  height: 54px;
  bottom: -27px;
  width: 100%;
  max-width: 736px;
  display: flex;
  gap: 8px;
  padding: 0 1rem;
 
`;

export const InputNovaTarefa = styled.input`
  height: 100%;
  flex: 1;
  color: #fff;
  background: #262626;
  border: 1px solid #0d0d0d;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 16px;
  text-align: center;
  input::placeholder {
    color: #808080;
  
  }
`;
export const BtnNovaTarefa = styled.button`
  height: 100%;
  padding: 0 16px;
  background: #333333;
  color: #f2a30b;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 14px;
`;
