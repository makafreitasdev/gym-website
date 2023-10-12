import { useState } from "react";
import Card from "./Card";
import styles from "./Plans.module.css";

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "INICIANTE",
      price: "100,00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet nostrum iste assumenda nulla sequi.",
    },
    {
      title: "INTERMEDIÁRIO",
      price: "100,00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet.",
    },
    {
      title: "AVANÇADO",
      price: "100,00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    },
    {
      title: "MONSTER",
      price: "100,00",
      description: "Lorem ipsum dolor sit amet .",
    },
    {
      title: "TURISTA",
      price: "100,00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing .",
    },
    {
      title: "MEGAMONSTER",
      price: "100,00",
      description: "Lorem ipsum dolor sit amet consectetur .",
    },
  ];

  const displayCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length],
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className={styles.carrosseilContainer}>
      <button className={styles.button} onClick={handlePrevClick}>
        &lt;
      </button>
      <div className={styles.carrosselContent}>
        {displayCards.map((card, i) => (
          <Card {...card} key={i} data={card} />
        ))}
      </div>
      <button className={styles.button} onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
}
