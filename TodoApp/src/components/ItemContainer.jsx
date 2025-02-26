/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import styles from "./ItemContainer.module.css";
import { TodoItemContext } from "../store/TodoItemContext";

const ItemContainer = () => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const getContextObj = useContext(TodoItemContext);
  const addItemInTodo = getContextObj.addItemInTodo;

  const handleOnNewButtonClick = (event) => {
    console.log(event);
    // event.preventDefault();
    const todoName = todoNameElement.current.value;
    console.log(todoName);
    const dueDate = dueDateElement.current.value;
    console.log(dueDate);

    addItemInTodo(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className={`${styles.adjustWidth} col-3`}>
            <input type="text" className={styles.input} ref={todoNameElement} />
          </div>
          <div className={`${styles.adjustWidth1} col-3`}>
            <input type="date" className={styles.input} ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button
              className={`${styles.myButton} btn btn-primary`}
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
