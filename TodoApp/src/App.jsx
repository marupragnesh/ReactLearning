import "./App.css";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import ItemContainer from "./components/ItemContainer";
import "bootstrap/dist/css/bootstrap.css";
import OneItem from "./components/OneItem";
import { useState } from "react";
import { TodoItemContext } from "./store/TodoItemContext";

function App() {
  // const initialItems = [
  //   {
  //     itemName: "buy milk",
  //     dueDate: "2021-09-01",
  //   },
  // ];

  const [itemValues, setTodoItem] = useState([]);

  const addItemInTodo = (todoItem, dueDate) => {
    setTodoItem((currentTodoItems) => {
      const newTodoList = [
        ...currentTodoItems,
        { itemName: todoItem, dueDateName: dueDate },
      ];
      return newTodoList;
    });
  };

  const deleteItemInTodo = (todoItem, dueDate) => {
    // condition false than remove it else store item
    const newTodoList = itemValues.filter(
      (item) => item.itemName !== todoItem || item.dueDateName !== dueDate
    );
    setTodoItem(newTodoList);
  };

  return (
    <>
      {/* i wrote values this will take time to solved problem */}
      <TodoItemContext.Provider
        value={{ itemValues, addItemInTodo, deleteItemInTodo }}
      >
        <AppName></AppName>
        <ItemContainer></ItemContainer>
        <WelcomeMessage></WelcomeMessage>
        <OneItem></OneItem>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
