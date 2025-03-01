import React from 'react';

const Campaign = () => {
  return (
    <section style={styles.section}>
      <h2>🎯 Our Election Campaign Efforts</h2>
      <p>SAHYOG has been actively working in election campaigns, organizing rallies, engaging with voters, and driving impactful social outreach programs.</p>

      {/* Booth Management Section */}
      <h3>📍 Booth Management</h3>
      <p>
        Elections are won at the booth level. A well-managed booth structure ensures every voter supporting SAHYOG is mobilized effectively.
        Our strategy includes:
      </p>
      <ul>
        <li>✔ Booth Mapping & Voter Categorization</li>
        <li>✔ Training Booth-Level Workers</li>
        <li>✔ Data-Driven Booth Planning</li>
        <li>✔ Door-to-Door Outreach</li>
      </ul>
      <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0012.jpg" alt="Speaking at Rally" style={styles.image} />

      {/* Ground Intelligence Section */}
      <h3>📍 Ground Intelligence</h3>
      <p>
        Understanding voter concerns is key to building a **powerful election campaign**.  
        We use **surveys, focus groups, and community engagement** to gather real-time voter sentiment.
      </p>
      <ul>
        <li>✔ Surveys & Polling</li>
        <li>✔ Community Engagement with Influencers</li>
        <li>✔ Addressing Local Issues with Targeted Messaging</li>
      </ul>
      <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0013.jpg" alt="Canvassing with Voters" style={styles.image} />

      {/* Social Media Management Section */}
      <h3>📍 Social Media Management</h3>
      <p>
        With **75% of voters influenced by social media**, digital platforms play a major role in election campaigns.
      </p>
      <ul>
        <li>✔ Booth-Level WhatsApp Groups</li>
        <li>✔ Targeted Social Media Content</li>
        <li>✔ Real-Time Monitoring of Trends</li>
      </ul>
      <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0007.jpg" alt="Group Meeting" style={styles.image} />

      {/* Implementation Plan */}
      <h3>🚀 Implementation Plan</h3>
      <p>We follow a structured three-phase approach:</p>
      <ul>
        <li>🎯 Phase 1 (3 Months Before Election) – Setup teams, analyze voter data.</li>
        <li>🎯 Phase 2 (2 Months Before Election) – Activate volunteers & voter outreach.</li>
        <li>🎯 Phase 3 (1 Month Before Election) – Intensive door-to-door campaigns.</li>
      </ul>
      <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0014.jpg" alt="Handing out Voter Material" style={styles.image} />

      {/* Expected Impact Section */}
      <h3>📊 Expected Impact</h3>
      <ul>
        <li>✔ Stronger SAHYOG presence at booth levels</li>
        <li>✔ Higher voter turnout and engagement</li>
        <li>✔ Data-driven decision-making</li>
        <li>✔ Positive social media narrative to counter opposition</li>
      </ul>
      <img src="https://hisoblivion.github.io/sahyog/pics/IMG-20250302-WA0008.jpg" alt="One-on-One Voter Interaction" style={styles.image} />
    </section>
  );
};

const styles = {
    section: {
      padding: '40px',
      textAlign: 'left',
      maxWidth: '800px',
      margin: 'auto',
      lineHeight: '1.6',
    },
    image: {
      width: '80%',  // Ensures images are not too large
      maxWidth: '400px',  // Restricts max size
      height: 'auto',  // Maintains aspect ratio
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'block',  // Prevents layout breaking
      margin: '20px auto',  // Centers images
    },
  };
  

export default Campaign;
