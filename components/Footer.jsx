import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>Choice for Hope Initiative - NYARUGENGE District, Kigali Rwanda, GITEGA Sector</p>
    <p>Contact: example@example.com | Phone: +123456789</p>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </footer>
);

export default Footer;
