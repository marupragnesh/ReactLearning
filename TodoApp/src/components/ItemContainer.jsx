import OneItem from "./OneItem";
import styles from "./ItemContainer.module.css";

const ItemContainer = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <input type="text" className={styles.input} />
          </div>
          <div className="col-3">
            <input type="date" className={styles.input} />
          </div>
          <div className="col-1">
            <button className={`${styles.input} btn btn-primary`}>Add</button>
          </div>
        </div>
      </div>
      <OneItem></OneItem>
    </>
  );
};
export default ItemContainer;
