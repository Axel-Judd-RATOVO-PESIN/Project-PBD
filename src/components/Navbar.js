import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.container}>
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
        <div style={styles.row}>
            <h1>Projet : Nouveaux Paradigmes de BD</h1>
            <h3>Une application Web intelligente dotée d'une technologie sémantique concernant les églises classées à l'UNESCO</h3>

        </div>
    </div>
    
  );
};

const styles = {
  container:{
    width:"auto",
    height:"100vh",
    backgroundImage: 'url(https://images.unsplash.com/photo-1515162305285-0293e4767cc2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2h1cmNofGVufDB8fDB8fHww)',
  },

  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
