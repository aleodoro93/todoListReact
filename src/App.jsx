import { useEffect, useState } from "react";
import { Tarefas } from "./components/Tarefas";
import Header from "./components/Header";
import Procurar from "./components/Procurar";

const LOCAL_STORAGE_KEY = "todo:tarefassalvas";
function App() {
  const [tasks, setTasks] = useState([]);
  const [procurar, setProcurar] = useState("");

  function carregarTarefas() {
    const salvas = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (salvas) {
      setTasks(JSON.parse(salvas));
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  function setSaveTask(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function adicionarTarefa(taskTitle) {
    setSaveTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function TaskCompleteById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setSaveTask(newTasks);
  }

  function deletarTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setSaveTask(newTasks);
  }

  return (
    <>
      <Header onAddTask={adicionarTarefa} />
      <Procurar procurar={procurar} setProcurar={setProcurar} />
      <Tarefas
        tasks={tasks.filter((task) =>
          task.title.toLowerCase().includes(procurar.toLowerCase())
        )}
        onComplete={TaskCompleteById}
        onDelete={deletarTaskById}
      />
    </>
  );
}

export default App;
