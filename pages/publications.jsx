// publications.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Publications.module.css'; // Import custom CSS module

// Sample publication data
const publicationsData = [
  {
    title: "Title of Publication 1",
    author: "Author Name",
    date: "March 1, 2024",
    summary: "Summary of Publication 1...",
    link: "#",
  },
  {
    title: "Title of Publication 2",
    author: "Author Name",
    date: "March 5, 2024",
    summary: "Summary of Publication 2...",
    link: "#",
  },
  // Add more publications as needed
];

const PublicationItem = ({ publication }) => (
  <div className={styles.publicationItem}>
    <h3>{publication.title}</h3>
    <p><strong>Author:</strong> {publication.author}</p>
    <p><strong>Date:</strong> {publication.date}</p>
    <p>{publication.summary}</p>
    <a href={publication.link}>Read more</a>
  </div>
);

const PublicationsPage = () => (
  <div className={styles.publicationsPage}>
    <Head>
      <title>Publications - Choice for Hope Initiative</title>
    </Head>
    <Header />
    <main>
      <h1>Publications</h1>
      <div className={styles.publicationList}>
        {publicationsData.map((publication, index) => (
          <PublicationItem key={index} publication={publication} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default PublicationsPage;
