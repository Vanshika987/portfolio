import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Vanshika Soni</h1>
        <p className={styles.description}>I am prefinal year student of MCA in NIT Agartala, skilled in Frontend Development and learing Backend Development.</p>
        <p className={styles.description}>Reach me out to know more...</p>
        <a className={styles.contactBtn} href="mailto:vanshikasoni2508@gmail.com">Contact me!</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me." />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
