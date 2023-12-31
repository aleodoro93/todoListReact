import styled from "styled-components";

export const TarefasSec = styled.section`

  width: 100%;
  max-width: 736px;
  margin: 0 auto;

  padding: 1rem;
  position: relative;
  justify-content: center;
`;

export const TarefasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
 
  position: relative;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  p {
    color: #020202;
    font-size: 14px;
    font-weight: 900;
    position: relative;
  }

  span {
    background: #333333;
    color: #f2a30b;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    position: relative;
  }
`;

export const ListaTarefas = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;
