import "./App.css";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import ItemContainer from "./components/ItemContainer";
import "bootstrap/dist/css/bootstrap.css";
import OneItem from "./components/OneItem";
import { useState } from "react";

function App() {
  // const initialItems = [
  //   {
  //     itemName: "buy milk",
  //     dueDate: "2021-09-01",
  //   },
  // ];

  const [itemValues, setTodoItem] = useState([]);

  const handleOnClick = (todoItem, dueDate) => {
    setTodoItem((currentTodoItems) => {
      const newTodoList = [
        ...currentTodoItems,
        { itemName: todoItem, dueDateName: dueDate },
      ];
      return newTodoList;
    });
  };

  const handleOnDelete = (todoItem, dueDate) => {
    const newTodoList = itemValues.filter(
      (item) => item.itemName !== todoItem || item.dueDateName !== dueDate
    );
    setTodoItem(newTodoList);
  };

  return (
    <>
      <todoItemContext.Provider value={[]}>
        <AppName></AppName>
        <ItemContainer handleOnClick={handleOnClick}></ItemContainer>
        <WelcomeMessage></WelcomeMessage>
        <OneItem Items={itemValues} handleOnDelete={handleOnDelete}></OneItem>
      </todoItemContext.Provider>
    </>
  );
}

export default App;
