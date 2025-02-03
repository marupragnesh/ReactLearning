/* eslint-disable no-unused-vars */
import { useState  } from "react";
import styles from "./ItemContainer.module.css";

const ItemContainer = ({ handleOnClick }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleOnInput = (event) => {
    setTodoName(event.target.value);
  };

  const handleOnDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnNewButtonClick = (event) => {
    console.log(event);
    event.preventDefault();
    handleOnClick(todoName, dueDate); // how i know that this method will return to parent app.jsx
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <form
        className="container text-center"
        onSubmit={(event) => handleOnNewButtonClick(event)}
      >
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              className={styles.input}
              value={todoName}
              onChange={(event) => handleOnInput(event)} // must pass argument if receiver in method
            />
          </div>
          <div className="col-3">
            <input
              type="date"
              className={styles.input}
              value={dueDate}
              onChange={(event) => handleOnDate(event)}
            />
          </div>
          <div className="col-1">
            <button className={`${styles.input} btn btn-primary`}>Add</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ItemContainer;
