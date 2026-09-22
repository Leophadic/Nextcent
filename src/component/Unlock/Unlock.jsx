import React from 'react';
import styles from './Unlock.module.css';
import unlockImg from '../../assets/unlock-illustration.svg.png'; // Exported illustration from Figma

export default function Unlock() {
  return (
    <section className={styles.unlockSection}>
      <div className={styles.container}>
        
        {/* Left Column: Graphic Asset */}
        <div className={styles.imageSide}>
          <img 
            src={unlockImg} 
            alt="Site layout illustration" 
            className={styles.illustration} 
          />
        </div>

        {/* Right Column: Text Content */}
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            The unseen of spending three <br /> years at Pixelgrade
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae sapien sodales efficitur. Vestibulum ante ipsum primis in 
            faucibus orci luctus et ultrices posuere cubilia curae; Velit eget tempor blandit, 
            mauris felis iaculis lorem, id euismod lectus eros vitae sapien.
          </p>
          <button className={styles.btnLearnMore}>
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}