import styles from "./Services.module.scss";
import ServicesCard from "../../ServicesCard/ServicesCard";

export default function Services() {
  return (
    <div className={styles.container}>
      <section className={styles.description}>
        <h2>The Standard Lorem Ipsum Passage</h2>
        <h1>The Standard Lorem Ipsum Passage</h1>
      </section>
      <section className={styles.cards}>
        <div className={styles.cards_container}>
        <ServicesCard
          src={"/assets/Icons/Monitor.png"}
          imgWidth={137}
          imgHeight={110}
          descriptionHeading={'Written by Cicero'}
          descriptionContent={'Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
          headingColor={'#F330E0'}
        />
        <ServicesCard
          src={"/assets/Icons/Movil.png"}
          imgWidth={77}
          imgHeight={124}
          descriptionHeading={'Written by Cicero'}
          descriptionContent={'Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
          headingColor={'#2C92CB'}
        />
        <ServicesCard
          src={"/assets/Icons/Email.png"}
          imgWidth={121}
          imgHeight={80}
          descriptionHeading={'Written by Cicero'}
          descriptionContent={'Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
          headingColor={'#11B785'}
        />
        </div>
      </section>
    </div>
  );
}