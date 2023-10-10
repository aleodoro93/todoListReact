import React from "react";
import { TarefasSec, TarefasHeader, ListaTarefas } from "./Style";
import { Tarefa } from "../Tarefa";

export const Tarefas = ({tasks}) => {
  const quantidadeTasks = tasks.length
  const tasksCompletas = tasks.filter(task=> task.isCompleted).length
  return (
    <TarefasSec>
      <TarefasHeader>
        <div>
          <p>Tarefas Criadas</p>
          <span>{quantidadeTasks}</span>
        </div>
        <div>
          <p>Tarefas concluidas</p>
          <span>{tasksCompletas} de {quantidadeTasks}</span>
        </div>
      </TarefasHeader>

      <ListaTarefas>
        {tasks.map(task =>(
          <Tarefa key={task.id} task={task} />
        ))}
      </ListaTarefas>
    </TarefasSec>
  );
};
