import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>Sobre Nós</h1>
        <p className={styles.aboutDescripition}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          excepturi magni qui ad, nisi possimus esse iusto provident quam
          quibusdam ipsam, cumque modi? Aperiam obcaecati est reiciendis
          distinctio dignissimos corrupti?
        </p>
      </div>
      <div>
        <Image 
          src="/img/about-img.avif"
          width={350}
          height={200}
          alt="About Image"
          className={styles.aboutImage}
        />  
      </div>
    </div>
  );
}
