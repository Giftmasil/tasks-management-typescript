import { type Task } from "./types";
import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  function addTasks (task: Task):void {
    setTasks([...tasks, task])
  }

  function updateStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  useEffect(() => {
    updateStorage(tasks)
    }, [tasks])

    const toggleTask = ({id}:{id:string}) => {
      setTasks(tasks.map((task) => {
        if (task.id === id) {
          return {...task, isCompleted: !task.isCompleted}
        } else {
          return task
        }
      }))
    }

  return (
    <section>
      <Form addTask={addTasks}/>
      <List tasks={tasks} toggleTask={toggleTask}/>
    </section>
  );
}
export default Component;
