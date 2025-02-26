/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./OneItem.module.css";
import { TodoItemContext } from "../store/TodoItemContext";

const OneItem = () => {
  const { itemValues, deleteItemInTodo } = useContext(TodoItemContext);
  // const Items = getContextObj.itemValues;
  // const deleteItemInTodo = getContextObj.deleteItemInTodo
  // const { deleteItemInTodo } = useContext(TodoItemContext);
  return (
    <>
      <div className="container ">
        {itemValues.map((item, index) => (
          <div className={`${styles.spaceAroundMe} row`} key={index}>
            <div className={`col-3 ${styles.adjustWidth1} `}>
              {item.itemName}
            </div>
            <div className={`${styles.adjustWidth2} col-3`}>
              {item.dueDateName}
            </div>
            <div className={`${styles.myButton} col-1`}>
              <button
                className={`${styles.myButton} btn btn-danger`}
                onClick={(event) =>
                  deleteItemInTodo(item.itemName, item.dueDateName)
                }
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
