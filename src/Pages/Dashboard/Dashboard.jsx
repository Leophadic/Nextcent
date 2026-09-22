import React from 'react';
import { useNavigate } from 'react-router';
import styles from './Dashboard.module.css'; // Importing custom scoped CSS

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.statusCard}>
        <div className={styles.successBadge}>✓</div>
        <h1>Authentication Successful!</h1>
        <p>You have successfully logged in and navigated to the Dashboard page.</p>
        
        <div className={styles.testArea}>
          <span>Status Check:</span>
          <span className={styles.onlineIndicator}>Working Fine</span>
        </div>

        <button className={styles.logoutBtn} onClick={() => navigate('/')}>
          Log Out to Home
        </button>
      </div>
    </div>
  );
}

export default Dashboard;