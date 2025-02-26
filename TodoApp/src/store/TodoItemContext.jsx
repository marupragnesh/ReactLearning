import { createContext } from "react";

export const TodoItemContext = createContext({
  itemValues: [],
  addItemInTodo: () => {},
  deleteItemInTodo: () => {},
});
