import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/containers/NavBar/NavBar";
import Hero from "../components/containers/Hero/Hero";
import CTA from "../components/containers/CTA/CTA";
import Services from "../components/containers/Services/Services";
import Pricing from '../components/containers/Pricing/Pricing'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>EME Technologies</title>
        <meta name="description" content="EME Technologies' landing page" />
      </Head>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>
        <Hero />
        <Services />
        <CTA />
        <Pricing />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
