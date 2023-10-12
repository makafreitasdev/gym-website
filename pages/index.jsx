import Head from "next/head";
import Navigator from "@/components/Navigator/Navigator";
import About from "@/components/HomePage/About"
import styles from "@/styles/Home.module.css"
import HomePage from './../components/HomePage/HomePage';
import { Personal } from "@/components/HomePage/Personal";
import Plans from "@/components/Carrossel/Plans";
import Location from "@/components/Location/Location"
import Contats from "@/components/Contats/Contats";

export default function Home() {


  return (
    <>
      <Head>
        <title>Gym</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;500&family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className={styles.headerContainer}>
        <div>
          <h1 className={styles.logoGym}>Gym</h1>
        </div>
        <div>
          <Navigator/>
        </div>
      </header>
      <main className={styles.mainContainer}>
       <section>
        <HomePage/>
       </section>
       <section>
        <About/>
       </section>
       <section>
        <Personal/>
       </section>
       <section>
        <h1 className={styles.plans}>Planos</h1>
        <Plans />
       </section>
       <section>
        <Location />
       </section>
       <section>
        <Contats />
       </section>
      </main>
    </>
  );
}
