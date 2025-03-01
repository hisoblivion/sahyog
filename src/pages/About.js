import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <h2>🎯 About SAHYOG</h2>
      <p>
        <span style={styles.highlight}>SAHYOG</span> is a political consulting firm dedicated to strengthening democratic processes through <u>strategic election management</u>, <u>voter outreach</u>, and <u>governance consultation</u>. We help political candidates and parties navigate the complexities of modern elections with data-driven strategies.
      </p>

      <h3>📍 Our Mission</h3>
      <p>At SAHYOG, we focus on fair and transparent election practices. Our mission is to:</p>
      
      <div style={styles.listContainer}>
        <div style={styles.listItem}><span style={styles.icon}>✅</span> <span style={styles.text}>Encourage democratic participation by empowering candidates with voter insights and strategic planning.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>✅</span> <span style={styles.text}>Use technology to improve election campaign management.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>✅</span> <span style={styles.text}>Build stronger connections between leaders and communities.</span></div>
      </div>

      <h3>🚀 What We Do</h3>
      <p>SAHYOG provides <u>end-to-end election consulting services</u>, covering every aspect of campaign planning, execution, and voter engagement.</p>

      <h4>📊 Voter Outreach & Public Sentiment Analysis</h4>
      <div style={styles.listContainer}>
        <div style={styles.listItem}><span style={styles.icon}>🔍</span> <span style={styles.text}>Conduct in-depth surveys and polling to analyze voter concerns.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📍</span> <span style={styles.text}>Track local issues at the panchayat, block, and constituency levels.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>🎙</span> <span style={styles.text}>Craft messaging that aligns with voter expectations and concerns.</span></div>
      </div>
      <img src="/pics/IMG-20250302-WA0006.jpg" alt="Voter Sentiment Analysis" style={styles.image} />

      <h4>🌐 Technology-Driven Political Strategy</h4>
      <div style={styles.listContainer}>
        <div style={styles.listItem}><span style={styles.icon}>💻</span> <span style={styles.text}>Use geo-targeted digital campaigns to reach specific voter demographics.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📊</span> <span style={styles.text}>Leverage big data analysis to identify swing voters.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📢</span> <span style={styles.text}>Implement WhatsApp and social media mobilization for wider reach.</span></div>
      </div>
      <img src="/pics/IMG-20250302-WA0010.jpg" alt="Digital Political Strategy" style={styles.image} />

      <h4>🗳 Governance Consultation</h4>
      <div style={styles.listContainer}>
        <div style={styles.listItem}><span style={styles.icon}>🏛</span> <span style={styles.text}>Provide strategic advisory for public policies.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📈</span> <span style={styles.text}>Assist in the effective implementation of government welfare schemes.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>🤝</span> <span style={styles.text}>Run citizen engagement programs to improve policy awareness.</span></div>
      </div>
      <img src="/pics/IMG-20250302-WA0015.jpg" alt="Governance Consultation" style={styles.image} />

      <h3>📅 Our Impact</h3>
      <div style={styles.listContainer}>
        <div style={styles.listItem}><span style={styles.icon}>📌</span> <span style={styles.text}>Helped political parties increase voter turnout by up to 15% through targeted outreach.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📌</span> <span style={styles.text}>Successfully implemented grassroots political mobilization strategies in multiple state elections.</span></div>
        <div style={styles.listItem}><span style={styles.icon}>📌</span> <span style={styles.text}>Strengthened government schemes by ensuring better public awareness and participation.</span></div>
      </div>

      <h3>🚀 Join the Movement</h3>
      <p>
        Whether you're a political candidate, government official, or a citizen passionate about democracy, SAHYOG is here to support you. Together, we can reshape political campaigns and governance for a better future.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    textAlign: 'center',
    maxWidth: '900px',
    margin: 'auto',
    lineHeight: '1.6',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#004080',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginTop: '20px',
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
};

export default About;
