import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} SAHYOG - Together for Change. All rights reserved.</p>
    </footer>
  );
};

const styles = {
    footer: {
      backgroundColor: '#004080',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 20px',
      width: '100vw', // Ensures it stretches correctly
      marginTop: 'auto',
      overflowX: 'hidden', // Prevents horizontal scrollbar
    },
  };
  
export default Footer;
