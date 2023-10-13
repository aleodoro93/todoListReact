import React from "react";
import { TarefaDiv, CheckContainer, BtnDeletar } from "./Style";
import { MdDeleteSweep } from "react-icons/md";
import {BsFillPatchCheckFill} from "react-icons/bs"
export const Tarefa = ({ task, onComplete, onDelete }) => {
  return (
    <TarefaDiv>
      <CheckContainer onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillPatchCheckFill size={30}/> : <div />}
      </CheckContainer>
      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
      <BtnDeletar onClick={()=>onDelete(task.id)}>
        <MdDeleteSweep size={30} />
      </BtnDeletar>
    </TarefaDiv>
  );
};