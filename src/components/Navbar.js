import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <img src="/Logo1.png" alt="Logo" style={styles.logoImage}/>
      <div style={styles.divLogo}>
        <h1 style={styles.titreNavbar} > Projet BD</h1>
      </div>
      <ul style={styles.menu}>
        <li>
          <a
            href="/CV_RATOVO_PESIN_Axel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4EEE5',
    color: 'white',
    padding: '10px 50px',
  },
  divLogo: {
    fontSize: '1.5rem',
    display:'flex',
    justifyContent:'space-between',
  },

  logoImage: {
    width: '120px ',
  },


  menu: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  link: {
    color:'#06022A',  
    textDecoration:'none',  
    marginLeft: '20px',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  },

   titreNavbar: {
    color:'#06022A',
    fontStyle:'italic',
  },

  linkHover: {
    color: '#61dafb',
  },
};

export default Navbar;
