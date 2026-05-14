import { useState } from "react";

function Edit({ task, setTasks }) {
  const [editedTask, setEditedTask] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    category: task.category,
  });
  return (
    <>
      <div
        className="modal fade popup"
        id={`editModal-${task.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="EditBackdrop"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EditBackdrop">
                Edit Task
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row text-start ">
                <div className="col-12">
                  <label htmlFor="title">Title:</label>
                </div>
                <div className="col-12">
                  <input
                    className="w-100"
                    type="text"
                    value={editedTask.title}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="description">Description:</label>
                </div>
                <div className="col-12">
                  <textarea
                    className="w-100"
                    id="description"
                    value={editedTask.description}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="type">Task Type:</label>
                </div>
                <div className="col-12">
                  <select
                    className="w-100"
                    name="type"
                    id="type"
                    value={editedTask.category}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask,
                        category: e.target.value,
                      })
                    }
                  >
                    <option value="work">Work</option>
                    <option value="urgent">Urgent</option>
                    <option value="personal">Personal</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  setTasks((prevState) => prevState.map((t) => (t.id === editedTask.id ? { ...t, ...editedTask } : t)))
                }
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
