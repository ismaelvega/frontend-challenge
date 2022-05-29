import styles from "./PricingCard.module.scss";
import Image from "next/image";

export default function PricingCard({ iconSrc, iconWidth, iconHeight, price, description }) {
  return (
    <div className={styles.container}>
      <section className={styles.card_container}>
        <div className={styles.icon_container}>
          <Image
            src={iconSrc}
            width={iconWidth}
            height={iconHeight}
            layout="raw"
            className={styles.icon}
          ></Image>
        </div>
        <p className={styles.price}>{price.toLocaleString('en-US')+'+'}</p>
      </section>
      <section className={styles.description}>{description}</section>
    </div>
  );
}
