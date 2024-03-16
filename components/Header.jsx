import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'; // Import Image from next/image
// import { FaBars } from 'react-icons/fa'; // Import menu icon from react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/Log.jpg"
          alt="WhatsApp Logo"
          className={styles.whatsappLogo}
          width={70}
          height={70}
        />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        {/* Menu icon 
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <FaBars />
        </div>
        */}
        {/* Navigation links */}
        <ul>
          <li>
            <Link href="/" passHref>
              <span className={styles.link}>Home</span>
            </Link>
          </li>
          <li>
            <span className={styles.link} onClick={toggleMenu}>Who we are</span>
            <ul className={styles['sub-menu']}>
              <li>
                <Link href="/who-we-are/about" passHref>
                  <span className={styles.subLink}>About</span>
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/staff" passHref>
                  <span className={styles.subLink}>Staff</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/our-work" passHref>
              <span className={styles.link}>Our work</span>
            </Link>
          </li>
          <li>
            <Link href="/publications" passHref>
              <span className={styles.link}>Publications</span>
            </Link>
          </li>
          <li>
            <Link href="/contact-us" passHref>
              <span className={styles.link}>Contact us</span>
            </Link>
          </li>
          <li>
            <Link href="/donation" passHref>
              <span className={styles.link}>Donation</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
