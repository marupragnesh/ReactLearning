/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import styles from "./ItemContainer.module.css";

const ItemContainer = ({ handleOnClick }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnNewButtonClick = (event) => {
    console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    console.log(todoName);
    const dueDate = dueDateElement.current.value;
    console.log(dueDate);

    handleOnClick(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <input type="text" className={styles.input} ref={todoNameElement} />
          </div>
          <div className="col-3">
            <input type="date" className={styles.input} ref={dueDateElement} />
          </div>
          <div className="col-1">
            <button
              className={`${styles.input} btn btn-primary`}
              onClick={(event) => handleOnNewButtonClick(event)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemContainer;
