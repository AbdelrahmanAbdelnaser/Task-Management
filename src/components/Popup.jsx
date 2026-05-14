function Popup(props) {
  return (
    <>
      <div
        className="modal fade popup"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Task
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row text-start ">
                <div className="col-12">
                  <label htmlFor="title">Title:</label>
                </div>
                <div className="col-12">
                  <input className="w-100" id="title" type="text" />
                </div>
                <div className="col-12">
                  <label htmlFor="description">Description:</label>
                </div>
                <div className="col-12">
                  <textarea className="w-100" id="description"></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="type">Task Type:</label>
                </div>
                <div className="col-12">
                  <select className="w-100" name="type" id="type">
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
                onClick={() => {
                  props.addToTasks();
                }}
              >
                Add The Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
