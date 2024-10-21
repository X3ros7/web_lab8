import Expenses from "../Expenses";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <Expenses />
    </div>
  );
};

export default Card;
