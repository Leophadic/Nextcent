import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg.png'; 
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Nexcent Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>Nexcent</span>
      </div>
      
      <div className={styles.navLinks}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#features" className={styles.link}>Features</a>
        <a href="#community" className={styles.link}>Community</a>
        <a href="#blog" className={styles.link}>Blog</a>
        <Link to="/Product" className={styles.link}>Product</Link>
        {/* <a href="#product" className={styles.link}>Product</a> */}
      </div>
      
      <div className={styles.actions}>
        <Link to="/login" className={styles.loginBtn}>
          Login
        </Link>
        {/* <button className={styles.btnLogin}>Login</button> */}
        <button className={styles.btnSignup}>SignUp</button>
      </div>
    </nav>
  );
}