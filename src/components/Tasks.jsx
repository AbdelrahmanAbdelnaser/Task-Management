import Delete from "./Delete";
import Edit from "./Edit";

function Tasks(props) {
  return (
    <>
      <div className="container pb-5">
        <div className="row g-1">
          {props.tasks.map((task) => {
            return (
              <div className="col-md-4 flex-fill" key={task.id}>
                <div
                  className={
                    task.category === "work"
                      ? "card color1"
                      : task.category === "urgent"
                        ? "card color2"
                        : "card color3"
                  }
                  data-type={task.category}
                >
                  <div className="card-body text-start ps-4">
                    <h5 className="card-title">{task.title}</h5>

                    <p className="card-text">{task.description}</p>

                    <div className="d-flex justify-content-end gap-1">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target={`#editModal-${task.id}`}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteModal-${task.id}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <Delete task={task} deleteTask={props.deleteTask} setTasks={props.setTasks} />
                <Edit task={task} setTasks={props.setTasks} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tasks;
