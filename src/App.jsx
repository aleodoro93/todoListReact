import { useEffect, useState } from "react";
import { DivSelect } from "./Style/Style";
import { Tarefas } from "./components/Tarefas";
import Header from "./components/Header";
import Procurar from "./components/Procurar";
import Particle from "./components/Particles/ParticlesBackground";

const LOCAL_STORAGE_KEY = "todo:tarefassalvas";

function App() {
  const [tasks, setTasks] = useState([]);
  const [procurar, setProcurar] = useState("");
  const [filter, setFilter] = useState("Todas");

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
      if (task.id === taskId) {
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
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setSaveTask(newTasks);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Todas") {
      return true;
    } else if (filter === "Completas") {
      return task.isCompleted;
    } else if (filter === "Incompletas") {
      return !task.isCompleted;
    }
    return true;
  });

  return (
    <>
      <Particle />
      <Header onAddTask={adicionarTarefa} />
      <Procurar procurar={procurar} setProcurar={setProcurar} />

      <DivSelect>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Completas">Completas</option>
          <option value="Incompletas">Incompletas</option>
        </select>
      </DivSelect>

      <Tarefas
        tasks={filteredTasks.filter((task) =>
          task.title.toLowerCase().includes(procurar.toLowerCase())
        )}
        onComplete={TaskCompleteById}
        onDelete={deletarTaskById}
      />
    </>
  );
}

export default App;
