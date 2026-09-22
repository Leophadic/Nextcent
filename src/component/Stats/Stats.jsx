import React from 'react';
import styles from './Stats.module.css';
import membersIcon from '../../assets/icon-members.svg.png';
import clubsIcon from '../../assets/icon-clubs.svg.png';
import eventsIcon from '../../assets/icon-events.svg.png';
import paymentsIcon from '../../assets/icon-payments.svg.png';

export default function Stats() {
  const statsData = [
    { icon: membersIcon, count: '2,345,321', label: 'Members' },
    { icon: clubsIcon, count: '46,328', label: 'Clubs' },
    { icon: eventsIcon, count: '828,867', label: 'Event Bookings' },
    { icon: paymentsIcon, count: '1,926,436', label: 'Payments' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.gridContainer}>
        {/* Left Column: Heading Content */}
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            Helping a local <br />
            <span className={styles.highlight}>business reinvent itself</span>
          </h2>
          <p className={styles.subtitle}>
            We reached this milestone through consistent team execution.
          </p>
        </div>

        {/* Right Column: Grid Figures */}
        <div className={styles.metricsSide}>
          {statsData.map((item, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.iconWrapper}>
                <img src={item.icon} alt={item.label} className={styles.metricIcon} />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.countNumber}>{item.count}</div>
                <div className={styles.labelName}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}