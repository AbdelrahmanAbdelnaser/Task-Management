import "./App.css";
import { useEffect, useState } from "react";
import Popup from "./components/Popup";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

/**
 * Main Task Management Application Component
 *
 * Responsibilities:
 * - Manage tasks state
 * - Persist tasks in localStorage
 * - Add and delete tasks
 * - Share state between Header, Popup, and Tasks components
 *
 * @component
 * @returns {JSX.Element}
 */

function App() {
  /**
   * State holding all tasks
   * Initialized from localStorage if available
   *
   * @type {[Array<Object>, Function]}
   */

  const [tasks, setTasks] = useState(() => {
    const storage = localStorage.getItem("tasks");
    const parsedStorge = JSON.parse(storage);
    return parsedStorge && parsedStorge.length > 0
      ? parsedStorge
      : [
          {
            id: 0,
            title: "TASK",
            description: "add one",
            category: "work",
          },
        ];
  });

  /**
   * State holding filtered tasks from Header component
   *
   * @type {[Array<Object>, Function]}
   */

  const [SelectedTask, setSelectedTask] = useState([]);

  /**
   * Sync tasks with localStorage whenever tasks change
   */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Adds a new task using values from the form inputs
   *
   * Note: Currently uses direct DOM access (querySelector)
   */

  const addToTasks = () => {
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let category = document.querySelector("#type");
    if (title.value.length > 0 && description.value.length > 0) {
      const newTask = {
        id: Date.now(),
        title: title.value,
        category: category.value,
        description: description.value,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      title.value = "";
      description.value = "";
    }
  };

  /**
   * Deletes a task by its ID
   *
   * @param {number} taskId - ID of the task to remove
   */

  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <Header tasks={tasks} SelectedTask={SelectedTask} setSelectedTask={setSelectedTask} />
      <Popup tasks={tasks} addToTasks={addToTasks} />
      <Tasks tasks={SelectedTask} setTasks={setTasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
