import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        {/* Logo */}
        <img src="/Logo1.png" alt="Logo" style={styles.logoImage} />

        {/* Documentation Link */}
        <a
          href="/Documentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Documentation
        </a>
      </nav>

      {/* Contenu à gauche */}
      <div style={styles.textContainer}>
        <p style={styles.paragraph}>
          <strong>Projet : Nouveaux Paradigmes de BD <br /></strong>
          Une application Web intelligente dotée d'une technologie sémantique concernant les églises classées à l'UNESCO
        </p>
        <button style={styles.button}><strong><a href="/Documentation.pdf" target="_blank" rel="noopener noreferrer"> Learn More</a></strong></button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "80vh",
    backgroundImage: 'url(https://images.unsplash.com/photo-1515162305285-0293e4767cc2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2h1cmNofGVufDB8fDB8fHww)',
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  logoImage: {
    width: '120px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '10px 20px',
    backgroundColor: '#06022A',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'calc(80vh - 70px)', // Ajuster la hauteur pour occuper le reste de l'espace
    padding: '50px',
  },
  paragraph: {
    fontSize: '1.5rem',
    color: 'black',
    textAlign: 'left',
    fontStyle: 'italic',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: 'black',
    border: "0",
    outline: "solid black",
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
  },
};

export default Navbar;
