import React from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>
        Pellentesque suscipit <br className={styles.mobileBr} /> fringilla libero eu.
      </h2>
      <button className={styles.btnDemo}>
        <span>Get a Demo</span>
        <span className={styles.arrow}>→</span>
      </button>
    </section>
  );
}