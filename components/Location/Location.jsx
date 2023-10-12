import Map from "../Map";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <div  className={styles.mapContainer}>
      <div className={styles.title}>
        <h1>Localização</h1>
      </div>
      <div className={styles.content}>
        <div>
          <Map />
        </div>
        <div className={styles.description}>
          <h1 className={styles.titleContent}><span>Gym</span> Center Training</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur dolores earum atque praesentium aspernatur rerum numquam illo id, suscipit, laboriosam officia perferendis, dolore mollitia facilis possimus libero sapiente! Culpa.</p>
        </div>
      </div>
    </div>
  );
}
