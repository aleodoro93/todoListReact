import React from "react";
import { TarefasSec, TarefasHeader, ListaTarefas } from "./Style";
import { Tarefa } from "../Tarefa";

export const Tarefas = ({ tasks, onComplete, onDelete, onEdit }) => {
  const quantidadeTasks = tasks.length;
  const tasksCompletas = tasks.filter((task) => task.isCompleted).length;

  return (
    <TarefasSec>
      <TarefasHeader>
        <div>
          <p>Criadas</p>
          <span>{quantidadeTasks}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>
            {tasksCompletas} de {quantidadeTasks}
          </span>
        </div>
      </TarefasHeader>

      <ListaTarefas>
        {tasks.map((task) => (
          <Tarefa
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit} 
          />
          
        ))}

      </ListaTarefas>
    </TarefasSec>
  );
};
