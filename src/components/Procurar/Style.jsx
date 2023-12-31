import styled from "styled-components";

export const DivProcurar = styled.div`
  margin-left: 40%;
  margin-top: 2%;
  display: flex;
  align-items: center;
  width: fit-content;
  min-width: 20%;
  min-height: 20%;
  position: relative;
`;

export const ProcurarInput = styled.input`
  width: 20%;
  height: 50px;
  flex: 1;
  color: #fff;
  background: #262626;
  border: 1px solid #0d0d0d;
  border-radius: 5px;
  padding: 0 16px;
  font-size: 16px;
  text-align: center;
  input::placeholder {
    color: #808080;
  }
`;
