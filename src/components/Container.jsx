import { useState } from "react";
import Header from "./Header";
import Popup from "./Popup";
import Tasks from "./Tasks";

function Container() {
  const [tasks, setTasks] = useState([]);
  function addToTasks() {
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
      console.log(tasks);
    }
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <Header />
      <Popup tasks={tasks} addToTasks={addToTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
    </>
  );
}

export default Container;
