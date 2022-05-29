import styles from './NavBar.module.scss'
import Image from 'next/image'
import CtaButton from '../../CtaButton/CtaButton'

export default function NavBar(){
  return (
    <div className={styles.navbar}>
      <Image src={'/assets/Logos/logo.png'} className={styles.logo} width={130} height={100} layout="raw"></Image>
      <div className={styles.navigation}>
        <article className={styles.section}><p>Home</p></article>
        <article className={styles.section}><p>How it works</p></article>
        <article className={styles.section}><p>Team</p></article>
        <article className={styles.section}><p>Contact</p></article>
        <article className={styles.section}><p>Blog</p></article>
      </div>
      <CtaButton text={'Launch App'}/>
    </div>
  )
}