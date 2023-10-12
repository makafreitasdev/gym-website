import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.homePageContent}>
      <h1 className={styles.homePageTitle}><span style={{color: "red"}}>Gym</span> Center Trainer</h1>
      <p className={styles.homePageDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum
        ipsum distinctio cum corrupti explicabo. Veniam deserunt unde accusamus
        quia! Dicta, asperiores iusto? Consequuntur enim obcaecati repudiandae
        ipsam cum dolor.
      </p>
    </div>
  );
}
