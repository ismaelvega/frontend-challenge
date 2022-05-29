import styles from "./CTA.module.scss";
import CtaButton from '../../CtaButton/CtaButton'
import Image from "next/image";

export default function CTA() {
  return (
    <div className={styles.container}>
      <section className={styles.textContent}>
        <h1><span>The Standard</span> Lorem Ipsum Passage.</h1>
        <p>The Standard Lorem Ipsum Passage.</p>
        <CtaButton text={'Launch App'}/>
      </section>
      <Image src={'/assets/Img/Robot_IA.svg'} width={500} height={500} layout="raw" className={styles.robot_img}></Image>
    </div>
  );
}
