
import { TarefaDiv, CheckContainer, BtnDeletar, BtnEditar } from "./Style";
import { MdDeleteSweep } from "react-icons/md";
import {BsFillPatchCheckFill} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
export const Tarefa = ({ task, onComplete, onDelete}) => {

  


  return (
   
    <TarefaDiv>
      <CheckContainer onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillPatchCheckFill size={30}/> : <div />}
      </CheckContainer>
      
      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
      <BtnEditar>
      <FiEdit size={20} />
      </BtnEditar>
      <BtnDeletar onClick={()=>onDelete(task.id)}>
        <MdDeleteSweep size={30} />
      </BtnDeletar>
    </TarefaDiv>
    
  );
};