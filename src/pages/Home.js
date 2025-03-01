import React from 'react';

const Home = () => {
  return (
    <section style={styles.section}>
      <h2>🎯 Welcome to SAHYOG</h2>
      <p>We have successfully led multiple election campaigns with strategic voter outreach and digital engagement.</p>

      {/* Image Grid */}
      <div style={styles.grid}>
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0015.jpg" alt="Large Campaign Gathering" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0010.jpg" alt="Volunteer Team" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0005.jpg" alt="Public Engagement" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0011.jpg" alt="Speaking to Voters" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0006.jpg" alt="Canvassing in Neighborhoods" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0009.jpg" alt="Public Engagement" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0014.jpg" alt="Informing Voters" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0008.jpg" alt="One-on-One Voter Interaction" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    textAlign: 'center',
    maxWidth: '1000px',
    margin: 'auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns layout
    gap: '15px', // Adds spacing between images
    marginTop: '20px',
  },
  image: {
    width: '100%', // Ensures images take full width of the container
    height: '250px', // Fixed height for uniformity
    objectFit: 'contain', // Prevents faces from getting cut
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default Home;
