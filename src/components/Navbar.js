import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>SAHYOG </h2>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/campaign" style={styles.link}>Campaign</Link>
        <Link to="/volunteer" style={styles.link}>Volunteer</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#004080",
    padding: "15px",
    position: "sticky", /* Change from fixed to sticky */
    top: "0",
    width: "100%",
    zIndex: "1000",
  },
  logo: {
    margin: "0",
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "10px",
    transition: "0.3s",
  },
};

export default Navbar;
