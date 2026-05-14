import { useEffect, useState } from "react";
import Header from "./Header";
import Popup from "./Popup";
import Tasks from "./Tasks";

function Container() {
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

  const [SelectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

export default Container;
