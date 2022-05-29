import styles from "./Pricing.module.scss";
import PricingCard from "../../PricingCard/PricingCard";

export default function ricing() {
  return (
    <div className={styles.container}>
      <h1>
        The <span>Standard</span>
      </h1>
      <section className={styles.pricing_cards_container}>
        <PricingCard
          iconSrc={"/assets/Icons/user.png"}
          iconWidth={42}
          iconHeight={48}
          price={1000}
          description={
            "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          }
        />
        <PricingCard
          iconSrc={"/assets/Icons/notification.png"}
          iconWidth={27}
          iconHeight={34}
          price={5000}
          description={
            "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          }
        />
        <PricingCard
          iconSrc={"/assets/Icons/cart.png"}
          iconWidth={34}
          iconHeight={34}
          price={2600}
          description={
            "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          }
        />
      </section>
    </div>
  );
}
