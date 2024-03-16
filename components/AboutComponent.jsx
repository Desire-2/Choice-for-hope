// about.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div className="container">
    <Header />
    <section className="about-section">
      <h1>About Us</h1>
      <p>
        Choice for Hope Initiative is a local Non-Government Organization
        located in NYARUGENGE District, Kigali Rwanda, GITEGA Sector. We are a
        group of young generation students and graduates from different
        universities who are willing to implement our acquired skills for
        community health promotion and community law promotion.
      </p>
      <p>
        Our mission is to empower communities through education, healthcare,
        and legal support. We believe in the potential of young people to bring
        positive change to society.
      </p>
    </section>
    <Footer />
    <style jsx>{`
      .container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .about-section {
        margin-top: 20px;
      }
      h1 {
        font-size: 2em;
        margin-bottom: 10px;
      }
      p {
        line-height: 1.6;
        margin-bottom: 15px;
      }
    `}</style>
  </div>
);

export default AboutPage;
