import React from "react";
import { TarefaDiv, CheckContainer, BtnDeletar } from "./Style";
import { TbTrash } from "react-icons/tb";

export const Tarefa = ({ task }) => {

  return (
    <TarefaDiv>
      <CheckContainer>
       <div />
      </CheckContainer>
      <p>{task.title}</p>

      <BtnDeletar>
        <TbTrash size={20} />
      </BtnDeletar>
    </TarefaDiv>
  );
};
