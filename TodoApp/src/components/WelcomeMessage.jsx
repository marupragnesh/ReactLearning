import style from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  return (
    <>
      {itemValues.length === 0 && (
        <h2 className={style.message}>Enjoy Your Day</h2>
      )}
    </>
  );
};
export default WelcomeMessage;
