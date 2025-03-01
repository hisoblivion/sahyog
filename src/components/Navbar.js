import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>SAHYOG - Together for Change</h2>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
        <li><Link to="/campaign" style={styles.navLink}>Campaign</Link></li>
        <li><Link to="/volunteer" style={styles.navLink}>Volunteer</Link></li>
        <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#004080',
    color: '#fff',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
    fontSize: '16px',
  },
};

export default Navbar;
