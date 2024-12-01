import React from 'react';
import './App.css'; // Assurez-vous que ce fichier contient votre style de base.
import QueryInterface from './components/QueryInterface';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <img id="imgEglise" src="/imgEglise2.jpg" alt="image d'une église"/>
        <QueryInterface/>
      </main>
      <footer>
        <p>&copy; 2024 Projet UNESCO</p>
      </footer>
    </div>
  );
}

export default App;
