import styles from "./Contats.module.css";
import Image from "next/image";

export default function Contats() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Gym</span> Center Training
        </h1>
        <h2 className={styles.follow}>Siga a Gym Center Training</h2>
        <div className={styles.socials}>
          <Image 
            src="/img/facebook.png"
            width={80}
            height={80}
            alt="facebook"
          />  
          <Image 
            src="/img/instagram.png"
            width={80}
            height={80}
            alt="instagram"
          />  
          <Image 
            src="/img/youtube.png"
            width={80}
            height={80}
            alt="youtube"
          />  
        </div>
      </div>
    </div>
  );
}
