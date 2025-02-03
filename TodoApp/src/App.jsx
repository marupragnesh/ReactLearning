import "./App.css";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import ItemContainer from "./components/ItemContainer";
import "bootstrap/dist/css/bootstrap.css";
import OneItem from "./components/OneItem";
import { useState } from "react";
function App() {
  const initialItems = [
    {
      itemName: "buy milk",
      dueDate: "2021-09-01",
    },
  ];

  const [itemName, setTodoItem] = useState([]);

  const handleOnClick = (todoItem, dueDate) => {
    const newTodoList = [...itemName, { itemName: todoItem, dueDate: dueDate }];
    setTodoItem(newTodoList);
  };

  const handleOnDelete = (todoItem, dueDate) => {
    const newTodoList = itemName.filter(
      (item) => item.itemName !== todoItem || item.dueDate !== dueDate
    );
    setTodoItem(newTodoList);
  };

  return (
    <>
      <AppName></AppName>
      <ItemContainer handleOnClick={handleOnClick}></ItemContainer>
      {itemName.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <OneItem Items={itemName} handleOnDelete={handleOnDelete}></OneItem>
    </>
  );
}

export default App;
