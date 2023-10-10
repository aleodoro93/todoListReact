import styled from "styled-components";

export const TarefasSec = styled.section`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 0 1rem;
`;

export const TarefasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    
    color: #f2a30b;
    font-size: 14px;
    font-weight: 700;
  }

  span {
    background: #333333;
    color: #f2a30b;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
  }
`;


export const ListaTarefas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`