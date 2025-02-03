/* eslint-disable react/prop-types */

const OneItem = ({ Items, handleOnDelete }) => {
  return (
    <>
      <div className="container text-center">
        {Items.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-3">{item.itemName}</div>
            <div className="col-3">{item.dueDate}</div>
            <div className="col-1">
              <button
                className="btn btn-danger"
                onClick={() => handleOnDelete(item.itemName,item.dueDate)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OneItem;
