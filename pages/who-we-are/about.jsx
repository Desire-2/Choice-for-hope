// pages/who-we-are/about.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css'; // Import CSS module

const AboutPage = () => {
  return (
    <div className={styles['about-page']}>
      <Header />
      <main>
        <section className={styles['about-section']}>
          <div className="container">
            <div className={styles['about-content']}>
              <div className={styles['about-text']}>
                <h1>About Us</h1>
                <p>
                  Choice for Hope Initiative is a local Non-Government Organization based in NYARUGENGE District, Kigali Rwanda, GITEGA Sector. We are a group of young generation students and graduates from different universities who are committed to implementing our acquired skills for community health promotion and community law promotion.
                </p>
                <p>
                  Our mission is to empower communities through education, advocacy, and support programs. We believe in fostering positive change by engaging with local communities and addressing their needs.
                </p>
                <p>
                  At Choice for Hope Initiative, we focus on various areas including healthcare access, education, environmental sustainability, and social justice. Through collaborative efforts and partnerships, we strive to make a meaningful impact in the lives of individuals and communities.
                </p>
                <Link href="/our-work">
                  <button className={styles['cta-button']}>Explore Our Work</button>
                </Link>
              </div>
              <div className={styles['about-image']}>
                <Image
                  src="/about-image.jpg"
                  alt="About Us"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles['testimonial-section']}>
          <div className="container">
            <h2>What People Say About Us</h2>
            <div className={styles.testimonial}>
              <p>&quot;Choice for Hope Initiative has made a significant impact on our community. Their dedication and commitment to improving lives are commendable.&quot;</p>
              <p className={styles['testimonial-author']}>&ndash; John Doe, Community Leader</p>
            </div>
            <div className={styles.testimonial}>
              <p>&quot;I&apos;m grateful for the support provided by Choice for Hope Initiative. They&apos;ve helped me access healthcare services that I couldn&apos;t afford otherwise.&quot;</p>
              <p className={styles['testimonial-author']}>&ndash; Jane Smith, Beneficiary</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
