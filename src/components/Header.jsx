import { useEffect, useState } from "react";

function Header({ tasks, setSelectedTask }) {
  const [activeCategory, setActiveCategory] = useState("all");

  function filterTasks(category) {
    setActiveCategory(category);

    if (category === "all") {
      setSelectedTask(tasks);
    } else {
      setSelectedTask(tasks.filter((task) => task.category === category));
    }
  }
  useEffect(() => {
    if (activeCategory === "all") {
      setSelectedTask(tasks);
    } else {
      setSelectedTask(tasks.filter((task) => task.category === activeCategory));
    }
  }, [tasks, activeCategory, setSelectedTask]);
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5 justify-content-between align-items-center">
          <div className="col-md-4 col-12">
            <p className="fs-3">Task Management</p>
          </div>
          <div id="categoryBtns" className="col-12 col-md-4 d-flex mb-3 mb-md-0 justify-content-evenly">
            <button
              type="button"
              className={activeCategory === "all" ? "select btn btn-outline-dark all" : "btn btn-outline-dark all"}
              onClick={() => filterTasks("all")}
            >
              All
            </button>
            <button
              type="button"
              className={activeCategory === "work" ? "select btn btn-outline-dark work" : "btn btn-outline-dark work"}
              onClick={() => filterTasks("work")}
            >
              Work
            </button>
            <button
              type="button"
              className={
                activeCategory === "urgent" ? "select btn btn-outline-dark urgent" : "btn btn-outline-dark urgent"
              }
              onClick={() => filterTasks("urgent")}
            >
              Urgent
            </button>
            <button
              type="button"
              className={
                activeCategory === "personal" ? "select btn btn-outline-dark personal" : "btn btn-outline-dark personal"
              }
              onClick={() => filterTasks("personal")}
            >
              Personal
            </button>
          </div>
          <div className="col-12 col-md-2 col-5 text-end">
            <button className="btn btn-primary w-100 w-md-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
