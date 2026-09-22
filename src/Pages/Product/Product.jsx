

import React from 'react';
import styles from   './Product.module.css'; // If you have specific styles for this page

function Product() {
  return (

    <div className={styles.productContainer}>
      {/* 1. Hero / Header Section */}
      <section className={styles.productHero}>
        <h1>Our Product Capabilities</h1>
        <p>Explore how our platform can supercharge your workflow.</p>
      </section>

      {/* 2. Features / Details Section */}
      <section className={styles.productDetails}>
        <div className={styles.card}>
          <h3>Feature One</h3>
          <p>Brief description of what this section does.</p>
        </div>
        <div className={styles.card}>
          <h3>Feature Two</h3>
          <p>Brief description of what this section does.</p>
        </div>
      </section>
    </div>

    
  );
}

export default Product;