import React from 'react';
import styles from './Community.module.css';
import membershipIcon from '../../assets/membership.png'
import associationIcon from '../../assets/icon-association.svg.png';
import groupIcon from '../../assets/icon-group.svg.png';

export default function Community() {
  const cards = [
    {
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
      icon: membershipIcon
    },
    {
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
      icon: associationIcon
    },
    {
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
      icon: groupIcon
    }
  ];

  return (
    <section id="community" className={styles.communitySection}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          Manage your entire community <br /> in a single system
        </h2>
        <p className={styles.subtitle}>Who is Nextcent suitable for?</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={card.icon} alt={card.title} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}