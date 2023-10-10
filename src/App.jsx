import { useState } from 'react'
import './App.css'
import { Tarefas } from './components/Tarefas'
import Header from './components/header'

function App() {
  const [tasks, setTasks] = useState([])

  function adicionarTarefa(taskTitle){ 
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  

  return(
    <>
    <Header onAddTask={adicionarTarefa} />
    <Tarefas
    tasks={tasks} />
    </>
  )
  
}

export default App
