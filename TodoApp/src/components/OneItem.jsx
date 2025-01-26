const OneItem = () => {
  const itemName = "buy milk";
  const dueDate = "2021-09-01";
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">{itemName}</div>
          <div className="col-3">{dueDate}</div>
          <div className="col-1">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-3">{itemName}</div>
          <div className="col-3">{dueDate}</div>
          <div className="col-1">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OneItem;
