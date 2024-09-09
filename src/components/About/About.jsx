import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Development</h3>
                    <p>I'm a frontend developer, with good hands on making responsive website</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Development</h3>
                    <p>I'm currently learing more about backend integration and APIs.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>DBMS</h3>
                    <p>Proficient in MySQL and Oracle.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About
