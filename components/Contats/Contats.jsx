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
            width={50}
            height={50}
            alt="facebook"
          />  
          <Image 
            src="/img/instagram.png"
            width={50}
            height={50}
            alt="instagram"
          />  
          <Image 
            src="/img/youtube.png"
            width={50}
            height={50}
            alt="youtube"
            href="#"
          />  
        </div>
        <div className={styles.copy}>
          <h3>Copyright © 2023 Gym Center Training. Todos os direitos reservados.</h3>
        </div>
      </div>
    </div>
  );
}
