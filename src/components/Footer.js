import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.gridContainer}>
        {/* Logo à gauche */}
        <div style={styles.logoContainer}>
          <img src="/Logo1.png" alt="Logo" style={styles.logoImage} />
        </div>

        {/* Lien "Documentation" à droite */}
        <div style={styles.linkContainer}>
         
          <a
            href="/CV_RATOVO_PESIN_Axel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
             Ratovo Pesin Axel
          </a>
    <br/>
    <br/>
          <a
            href="/CV_Ahoussi_Nathan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Ahoussi Sainth-Nathan
          </a>
    <br/>
    <br/>
          <a
            href="/Documentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Texte en bas */}
      <p style={styles.footerText}>
        2024 - Projet UNESCO @ RATOVO Pesin Axel & AHOUSSI Sainth-Nathan
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "30px",
    backgroundColor: '#92cad4',
    color: '#06022A',
    textAlign: 'center',
    padding: '20px 10px',
    position: 'relative',
  },
  gridContainer: {
    marginLeft: "30%",
    marginRight: "30%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  logoContainer: {
    flex: 1,
    textAlign: 'left',
  },
  linkContainer: {
    flex: 1,
    textAlign: 'right',
  },
  logoImage: {
    width: '230px',
  },
  link: {
    textDecoration: 'none', 
    color: '#06022A', 
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '0.9rem',
  },
};

export default Footer;
