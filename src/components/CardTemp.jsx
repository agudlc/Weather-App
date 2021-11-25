import styles from "./CardTemp.module.css";

function CardTemp ({label, value}) {
    return <div className={styles.CardTemp}>
    <label>{label}</label>
    <span>{value}</span>
  </div>
  };

export default CardTemp;