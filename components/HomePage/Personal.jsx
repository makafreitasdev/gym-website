import styles from "./Personal.module.css";
import { CardsPersonal } from "@/components/Card";

export function Personal() {
  return (
    <div className={styles.personalContainer}>
      <div className={styles.personalContent}>
        <h1 className={styles.porsonalTitle}> PERSONAL TRAINERS</h1>
        <div className={styles.personals}>
          <div>
            <CardsPersonal
              image={"/img/trainers2.jpg"}
              name={"Murilo"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorexcepturi magni qui ad"
              }
            />
          </div>
          <div>
            <CardsPersonal
              image={"/img/trainers1.jpg"}
              name={"Jennifer"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorexcepturi magni qui ad"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
