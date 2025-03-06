import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from "./composant/Hero.jsx";  // Vérifie que le chemin est correct

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Redirection de la racine vers /accueil */}
          <Route path="/" element={<Navigate to="/accueil" />} />
          
          {/* Route vers la page d'accueil avec le composant Hero */}
          <Route path="/accueil" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
