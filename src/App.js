import React from 'react';
import './App.css'; // Assurez-vous que ce fichier contient votre style de base.
import QueryInterface from './components/QueryInterface';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <QueryInterface/>
        <Footer/>
    </div>
  );
}

export default App;
