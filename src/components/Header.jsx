function Header() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5 justify-content-between align-items-center">
          <div className="col-md-4 col-6">
            <p className="fs-3">Task Management</p>
          </div>
          <div className="col-md-2 col-5 text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
