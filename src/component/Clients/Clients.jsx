



import React from 'react';
import styles from './Clients.module.css';

// Export your client logo vectors from Figma layers
import companyLogo1 from '../../assets/logo-1.svg.png';
import companyLogo2 from '../../assets/logo-2.svg.png';
import companyLogo3 from '../../assets/logo-3.svg.png';
import companyLogo4 from '../../assets/logo-4.svg.png';
import companyLogo5 from '../../assets/logo-5.svg.png';
import companyLogo6 from '../../assets/logo-6.svg.png';
import companyLogo7 from '../../assets/logo-7.svg.png';

export default function Clients() {
  const logos = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
  ];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        {/* Header Text Group */}
        <div className={styles.textGroup}>
          <h2 className={styles.title}>Our Clients</h2>
          <p className={styles.subtitle}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Endless Row Grid for Logos */}
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img 
                src={logo} 
                alt={`Client partner logo ${index + 1}`} 
                className={styles.logoImage} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



