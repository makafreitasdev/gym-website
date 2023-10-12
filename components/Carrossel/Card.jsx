import styles from "./Card.module.css";

export default function Card({ title, price, description }) {
  return (
    <div className={styles.card}>
      <img src="" alt="" className={styles.image}/>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{price}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
