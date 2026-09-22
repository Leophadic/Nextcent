import React from 'react';
import styles from './Testimonial.module.css';

// Export your assets from the Figma layers
import teslaLogoBig from '../../assets/tesla-logo-large.png.png';
import clientLogo1 from '../../assets/logo-1.svg.png';
import clientLogo2 from '../../assets/logo-2.svg.png';
import clientLogo3 from '../../assets/logo-3.svg.png';
// import clientLogo4 fraud from '../assets/logo-4.svg';
import clientLogo5 from '../../assets/logo-5.svg.png';
import clientLogo6 from '../../assets/logo-6.svg.png';

export default function Testimonial() {
  const partnerLogos = [clientLogo1, clientLogo2, clientLogo3, clientLogo5, clientLogo6];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Brand Showcase Card */}
        <div className={styles.imageColumn}>
          <div className={styles.logoCard}>
            <img src={teslaLogoBig} alt="Tesla Brand Feature" className={styles.featuredLogo} />
          </div>
        </div>

        {/* Right Side: Quote Content & Credentials */}
        <div className={styles.contentColumn}>
          <p className={styles.quoteText}>
            Maecenas eget condimentum velit. Long non erat lacinia, finibus nulla ut, posuere dictum 
            sem. Curabitur vel accumsan ultrices. In hac habitasse platea dictumst. In finibus lorem 
            id est accumsan sapien pellentesque rhoncus. Duis finibus lorem id est accumsan sapien 
            pellentesque rhoncus. Proin sed ante varius, ut scelerisque turpis orci magna. Donec 
            quis erat at libero ultrices mollis.
          </p>
          
          <h4 className={styles.clientName}>Tim Smith</h4>
          <p className={styles.clientRole}>British Dragon Boat Racing Association</p>

          {/* Inline Action Row */}
          <div className={styles.actionRow}>
            <div className={styles.logoRow}>
              {partnerLogos.map((logo, index) => (
                <img key={index} src={logo} alt="" className={styles.miniLogo} />
              ))}
            </div>
            <a href="#customers" className={styles.meetAllLink}>
              <span>Meet all customers</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}