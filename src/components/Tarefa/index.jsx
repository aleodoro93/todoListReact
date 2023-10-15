import React, { useState } from "react";
import { TarefaDiv, CheckContainer, BtnDeletar, BtnEditar } from "./Style";
import { MdDeleteSweep } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const Tarefa = ({ task, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editedTitle); 
    setIsEditing(false);
  };

  return (
    <TarefaDiv>
      <CheckContainer onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillPatchCheckFill size={30} /> : <div />}
      </CheckContainer>

      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Salvar</button>
        </div>
      ) : 
        <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
}

      <BtnEditar onClick={handleEdit}>
        <FiEdit size={20} />
      </BtnEditar>

      <BtnDeletar onClick={() => onDelete(task.id)}>
        <MdDeleteSweep size={30} />
      </BtnDeletar>
    </TarefaDiv>
);
};
