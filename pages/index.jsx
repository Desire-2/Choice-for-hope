// pages/index.jsx
import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/index.module.css';
import Header from '../components/Header';


const IndexPage = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const toggleVision = () => {
    setShowVision(!showVision);
  };

  const toggleMission = () => {
    setShowMission(!showMission);
  };

  return (
    <div>
    <Header />
    <div className={styles.container}>
      <Head>
        <title>Welcome to Choice for Hope Initiative</title>
        <meta name="description" content="Choice for Hope Initiative is a local Non-Government Organization located in NYARUGENGE District, Kigali Rwanda, GITEGA Sector, focusing on community health promotion and human rights advocacy." />
      </Head>
      <h1 className={styles.title}>Welcome to Choice for Hope Initiative</h1>
      <p className={styles.description}>Choice for Hope Initiative is a local Non-Government Organization which started on <span className={styles.highlight}>01.02.2023</span>, located in <span className={styles.highlight}>NYARUGENGE District</span>, <span className={styles.highlight}>Kigali Rwanda</span>, <span className={styles.highlight}>GITEGA Sector</span>. We are an organization based on young generation students’ and graduates in different universities, willing to implement our acquired skills for community health promotion and community law promotion.</p>
      <h2 className={styles.subtitle} onClick={toggleVision}>The vision of Choice for Hope Initiative</h2>
      <p className={`${styles.description} ${styles.visionMission} ${showVision && styles.show}`}>The vision of C.H.I is to see the Rwandan young generations where human rights are fairly respected and enjoyed and to become a leading sexual reproductive health and rights (SRHR) organization in Rwanda.</p>
      <h2 className={styles.subtitle} onClick={toggleMission}>Choice for Hope Initiative’s mission</h2>
      <p className={`${styles.description} ${styles.visionMission} ${showMission && styles.show}`}>Choice for Hope Initiative’s mission is to contribute to the respect, promotion, and fulfillment of the rights of individuals and groups through human rights monitoring and advocacy of the nation. And also to provide the highest confidential and convenient SRHR services that respond to the society’s needs.</p>
    </div>
    <Footer />
    </div>
  );
};

export default IndexPage;
