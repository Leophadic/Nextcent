import React from 'react';
import styles from './Hero.module.css';
import heroImg from "../../assets/hero-illustration.svg.png";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Lessons and insights <br />
          <span className={styles.highlight}>from 8 years</span>
        </h1>
        <p className={styles.subtitle}>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className={styles.btnPrimary}>
          Register
        </button>
      </div>
      <div className={styles.imageContainer}>
        {/* Rendered the imported Figma design illustration */}
        <img 
          src={heroImg} 
          alt="Nexcent Hero Illustration" 
          className={styles.heroImage} 
        />
      </div>
    </section>
  );
}