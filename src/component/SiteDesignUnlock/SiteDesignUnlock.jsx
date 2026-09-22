import React from 'react';
import styles from './SiteDesignUnlock.module.css';
import mobileIllustration from '../../assets/mobile-login-rafiki.svg.png'; // Exported from your Figma layers

export default function SiteDesignUnlock() {
  return (
    <section className={styles.unlockWrapper}>
      <div className={styles.container}>
        
        {/* Left Column: Graphic Security Illustration */}
        <div className={styles.graphicSide}>
          <img 
            src={mobileIllustration} 
            alt="Mobile login and footer layout illustration" 
            className={styles.illustrationImage} 
          />
        </div>

        {/* Right Column: Typography & Action Button */}
        <div className={styles.contentSide}>
          <h2 className={styles.headingTitle}>
            How to design your site footer like <br /> we did
          </h2>
          <p className={styles.bodyParagraph}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt 
            molestie, massa nunc varius arcu, ut scelerisque turpis orci magna. Donec quis erat at 
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus luctus eros aliquet 
            convallis. In euismod aliquet nibh, nec aliquet nisl ultrices quis. Integer 
            at aliquet sem vulputate elit porta massa. Praesent velit eros, hendrerit varius libero.
          </p>
          <button className={styles.actionBtn}>
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}