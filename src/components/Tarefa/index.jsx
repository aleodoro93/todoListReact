import React from "react";
import { TarefaDiv, CheckContainer, BtnDeletar } from "./Style";
import { MdDeleteSweep } from "react-icons/md";
import {BsFillCheckCircleFill} from "react-icons/bs"
export const Tarefa = ({ task, onComplete, onDelete }) => {
  return (
    <TarefaDiv>
      <CheckContainer onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </CheckContainer>
      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
      <BtnDeletar onClick={()=>onDelete(task.id)}>
        <MdDeleteSweep size={20} />
      </BtnDeletar>
    </TarefaDiv>
  );
};
