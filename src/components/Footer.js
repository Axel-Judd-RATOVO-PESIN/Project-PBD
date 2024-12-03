import React from 'react';

const Footer = () => {
  return (
        <footer style={styles.footer}>
            <div style={styles.grillefooter}> 
                <img src="/Logo1.png" alt="Logo" style={styles.logoImage}/>
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
            </div>
            <p>2024 - Projet UNESCO @ RATOVO Pesin Axel & AHOUSSI Sainth-Nathan</p> 
        </footer>
  );
};

const styles = {
    footer: {
        textalign : 'center',
        padding: '5px',
        backgroundColor: '#F4EEE5',
        color:'#06022A',
    },
    grillefooter: {
        display: 'grid',
        gridTemplateColumns : 2,
        marginLeft: "40%",
        marginRight: "40%",
    },

    logoImage: {
        width:"320px",
        gridColumns : "1",
    }
};

export default Footer;
