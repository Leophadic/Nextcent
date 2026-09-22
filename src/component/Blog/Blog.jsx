import React from 'react';
import styles from './Blog.module.css';

// Export your images/illustrations from Figma 
import marketingImg1 from '../../assets/marketing-1.png.png';
import marketingImg2 from '../../assets/marketing-2.png.png';
import marketingImg3 from '../../assets/marketing-3.png.png';

export default function Blog() {
  const articles = [
    {
      id: 1,
      image: marketingImg1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      image: marketingImg2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      image: marketingImg3,
      title: "Revamping the Membership Model with Triathlon Australia",
    }
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Caring is the new marketing</h2>
          <p className={styles.subtitle}>
            The Nexcent blog is the best place to read about the latest membership insights, 
            trends and more. See more advice joining the community.
          </p>
        </div>

        {/* Cards Grid Grid */}
        <div className={styles.grid}>
          {articles.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              
              {/* Floating Content Box */}
              <div className={styles.contentBox}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <a href="#" className={styles.link}>
                  <span>Read more</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}