import styles from "./Card.module.css";

export function CardsPersonal(props) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={props.image} alt={props.alt} />
      <div className={styles.text}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <button className={styles.btn}>Contato</button>
      </div>
    </div>
  );
}
