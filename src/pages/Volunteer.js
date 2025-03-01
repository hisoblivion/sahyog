import React from 'react';

const Volunteer = () => {
  return (
    <section style={styles.section}>
      <h2>🎯 Join the SAHYOG Team</h2>

      {/* 🚀 Sign Up Section Moved to the Top */}
      <h3>🚀 Sign Up as a Volunteer</h3>
      <p>
        Become a part of SAHYOG's mission to strengthen democracy. Fill out the form below to get involved.
      </p>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <button type="submit" style={styles.button}>Join Us</button>
      </form>

      {/* Why Join Us Section */}
      <h3>📍 Why Join Us?</h3>
      <p>
        Volunteers are the backbone of a successful election campaign. Joining SAHYOG means making a real impact in the community.
      </p>
      <div style={styles.listContainer}>
        <div style={styles.listItem}>
          <span style={styles.icon}>✅</span> <span style={styles.text}>Help with booth-level voter mobilization.</span>
        </div>
        <div style={styles.listItem}>
          <span style={styles.icon}>📢</span> <span style={styles.text}>Spread awareness about government schemes.</span>
        </div>
        <div style={styles.listItem}>
          <span style={styles.icon}>📊</span> <span style={styles.text}>Participate in surveys and polling initiatives.</span>
        </div>
        <div style={styles.listItem}>
          <span style={styles.icon}>🌍</span> <span style={styles.text}>Strengthen our social media outreach.</span>
        </div>
      </div>

      {/* Volunteer Action Section */}
      <h3>📸 Our Volunteers in Action</h3>
      <div style={styles.gallery}>
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0011.jpg" alt="Speaking to Voters" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0006.jpg" alt="Canvassing in Neighborhoods" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0009.jpg" alt="Public Engagement" style={styles.image} />
        <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0014.jpg" alt="Informing Voters" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#004080',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    maxWidth: '700px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
    textAlign: 'left',
  },
  icon: {
    fontSize: '20px',
    flexShrink: 0,
  },
  text: {
    flexGrow: 1,
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default Volunteer;
