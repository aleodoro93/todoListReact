import styled from "styled-components";

export const TarefaDiv = styled.div`
 width: 95%;
  background: #262626;
  border: 1px solid #333333;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  
  p {
  font-size: 14px;
  line-height: 19px;
  color: #f2a30b;
  margin-right: auto;

}
`

export const CheckContainer = styled.button`
  width: 22px;
  height: 12px;
  background: none;
  border: none;
 
  div {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  border: 2px solid #4EA8DE;
}

svg {
  width: 100%;
  height: 100%;
  color: #5E60CE;
}
`

export const BtnDeletar = styled.button`
  background: none;
  border: none;
  color: #808080;
  `