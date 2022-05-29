import styles from './Hero.module.scss'
import CtaButton from '../../CtaButton/CtaButton'
import Image from 'next/image'

export default function Hero(){
  return(
    <div className={styles.container}>
      <section className={styles.content}>
        <h2>The standard Lorem Ipsum Passage</h2>
        <h1>Lorem Ipsum <span>Sitamet</span> Consectetur</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in</p>
        <CtaButton text={'Launch App'} />
      </section>
      <section className={styles.robot_container}>
        <Image src={'/assets/Img/Fondo-Robot.svg'} width={0} height={0} layout={'raw'} className={styles.robot_bkg}></Image>
        <div className={styles.bars}>
          <article className={styles.glass_bar}></article>
          <article className={styles.glass_bar}></article>
          <article className={styles.glass_bar}></article>
        </div>
        <Image src={'/assets/Img/Robot.svg'} width={0} height={0} layout={'raw'} className={styles.robot_img}></Image>
      </section>
    </div>
  )
}