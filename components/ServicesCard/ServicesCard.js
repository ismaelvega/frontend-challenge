import styles from "./ServicesCard.module.scss";
import Image from "next/image";

export default function ServicesCard({ src, imgWidth, imgHeight, descriptionHeading, headingColor, descriptionContent }) {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <Image
          src={src}
          width={imgWidth}
          height={imgHeight}
          layout={"raw"}
          className={styles.card_img}
        ></Image>
      </div>
      <div className={styles.description}>
        <h2 style={{color: headingColor}}>{descriptionHeading}</h2>
        <p>{descriptionContent}</p>
      </div>
    </article>
  );
}
