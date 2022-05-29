import styles from './CtaButton.module.scss'

export default function CtaButton({text}){
  return(
    <button className={styles.cta_button}>{text}</button>
  )
}