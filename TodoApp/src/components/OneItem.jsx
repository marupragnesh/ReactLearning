/* eslint-disable react/prop-types */
import styles from "./OneItem.module.css";

const OneItem = ({ Items, handleOnDelete }) => {
  return (
    <>
      <div className="container ">
        {Items.map((item, index) => (
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
                onClick={() => handleOnDelete(item.itemName, item.dueDateName)}
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
