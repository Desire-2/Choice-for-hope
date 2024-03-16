import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header'; 
import Image from 'next/image'; // Import Image from next/image
import styles from '../../styles/about.module.css'; // Import CSS module for styling

const OrganizationalStructure = () => {
  // Sample data for departmental roles and member profiles
  const departments = [
    {
      name: 'Present in meeting',
      roles: [
        {
          name: 'Present in meeting',
          members: [
            {
              name: 'TUGIRAMAHORO Yves ',
              email: 'bikorimanadesire@yahoo.com',
              phone: '+250780784924',
              image: '/images/Yves_TUGIRAMAHORO.jpg'
            }
          ]
        },
        {
          name: 'Deputy Director',
          members: [
            {
              name: 'MANIRAFASHA Jay Clever ',
              email: 'jdamourirakoze@gmail.com',
              phone: '+250786934546',
              image: '/images/Manirafasha_Jean_Claude.jpg'
            }
          ]
        },
        {
          name: 'Secretary',
          members: [
            {
              name: 'INGABIRE Marie Chantal',
              email: 'uwizeyimanaliliane22@gmail.com',
              phone: '+250786700993',
              image: '/images/Ingabire_Chantal.jpg'
            }
          ]
        },
        {
          name: 'Director  of Human rights',
          members: [
            {
              name: 'UMUHIRE Nelly Auriella',
              email: 'mugishaclemence6@gmail.com',
              phone: '+250789982043',
              image: '/images/UMUHIRE_Nelly_Auriella.jpg'
            }
          ]
        },
        {
          name: 'Coordinator SRHR and HIV Prevention',
          members: [
            {
              name: 'KWIZERA Elie',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/KWIZERA_Elie.jpg'
            }
          ]
        },
        {
          name: 'Treasurer',
          members: [
            {
              name: 'ISHIMWE Justine',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/ISHIMWE_Justine.jpg'
            }
          ]
        },
        {
          name: 'Communication and Dissemination Manager',
          members: [
            {
              name: 'NIYONKURU Seminega Christine',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/Niyonkuru_Semenaga_Christine.jpg'
            }
          ]
        },
        {
          name: 'Membership coordinator',
          members: [
            {
              name: 'UMUHOZA Josiane',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/UMUHOZA_Josiane.jpg'
            }
          ]
        },
        {
          name: 'Public Relation',
          members: [
            {
              name: 'ITANGISHA Benjamin',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/Benjamin.jpg'
            }
          ]
        },
        {
          name: 'Capacity building officer',
          members: [
            {
              name: 'NIYIDUKUNDA Promesse',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/Benjamin.jpg'
            }
          ]
        },
        {
          name: 'Administrative manager',
          members: [
            {
              name: 'USENGIMANA Enias',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/USENGIMANA_Enias.jpg'
            }
          ]
        },
        {
          name: 'Administrative Assistant',
          members: [
            {
              name: 'KANYARWANDA Alexis',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/KANYARWANDA_Alexis.jpg'
            }
          ]
        },
        /* 
        {
          name: 'Program Manager',
          members: [
            {
              name: 'TWIZERE Hubert',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/3.jpg'
            }
          ]
        },
        {
          name: 'Program Manager',
          members: [
            {
              name: 'TWIZERE Hubert',
              email: 'mwisenezauwet@gmail.com',
              phone: '+250787492740',
              image: '/images/3.jpg'
            }
          ]
        },
      ]
    },
    {
      name: 'Program Manager',
      members: [
        {
          name: 'TWIZERE Hubert',
          email: 'mwisenezauwet@gmail.com',
          phone: '+250787492740',
          image: '/images/3.jpg'
        }
      ]
    },
  ]
},
    
    {
      name: 'Department Heads',
      roles: [
        {
          name: 'Communication Officer',
          members: [
            {
              name: 'Hemenegilde Undimwana',
              email: 'hermenegide3@gmail.com',
              phone: '+250781499864',
              image: '/images/3.jpg'
            }
          ]
        },
        {
          name: 'Administration Officer',
          members: [
            {
              name: 'Theoneste IRANKUNDA',
              email: 'bob@example.com',
              phone: '+250789428058',
              image: '/images/3.jpg'
            }
          ]
        },
        */
        // Add more departmental roles and members as needed
      ]
    }
  ];
  return (
    <div>
      <Header />
      <div className={styles.container}>
        
        <Head>
          <title>Biodiversity Nexus Student Association - Organizational Structure</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Organizational Structure</h1>

          <div className={styles.structure}>
            {departments.map((department, index) => (
              <div key={index} className={styles.department}>
                <h2>{department.name}</h2>
                <ul>
                  {department.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className={styles.role}>
                      <h3>{role.name}</h3>
                      <ul>
                        {role.members.map((member, memberIndex) => (
                          <li key={memberIndex} className={styles.member}>
                            <Image src={member.image} alt={member.name} className={styles.image} width={100} height={100} />
                            <div>
                              <span className={styles.name}>{member.name}</span>
                              <span className={styles.contact}>
                                Email: <a href={`mailto:${member.email}`}>{member.email}</a>, 
                                Phone: {member.phone}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
        
      </div>
      <Footer />
    </div>
  );
};
export default OrganizationalStructure;