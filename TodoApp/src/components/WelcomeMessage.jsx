import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/TodoItemContext";

const WelcomeMessage = () => {
  // { ItemValue }
  const ItemValue = useContext(TodoItemContext);
  return (
    <>
      {ItemValue.length === 0 && (
        <h2 className={style.message}>Enjoy Your Day</h2>
      )}
    </>
  );
};
export default WelcomeMessage;
