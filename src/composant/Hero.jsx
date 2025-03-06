import React, { useState } from "react";
import "../style/hero.css"; // En fonction de la structure de ton projet





export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid-container">
          <div className="content">
            <div className="text-content">
              <h1>
                FootspaceReserve<span className="primary">.</span>
              </h1>
              <p>
                Optimisez la gestion de vos terrains de football avec notre solution de réservation en ligne. Augmentez
                vos revenus et simplifiez l'expérience de vos clients.
              </p>
            </div>
            <div className="buttons">
              <a href="#contact" className="demo-button">
                Demander une démo
                <span className="arrow-icon">→</span>
              </a>
              <a href="#features" className="features-button">
                Découvrir les fonctionnalités
              </a>
            </div>
          </div>
          <div
            className="calendar-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="calendar-background">
              <div className="calendar-content">
                <div className={`calendar-card ${isHovered ? "hovered" : ""}`}>
                  <div className="card-header">
                    <h3>Réservation de terrain</h3>
                    <span className="calendar-icon">📅</span>
                  </div>
                  <div className="card-body">
                    <div className="days-grid">
                      {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                        <div
                          key={i}
                          className={`day-cell ${
                            i === 2 || i === 4
                              ? "primary-bg"
                              : i === 3
                              ? "orange-bg"
                              : "muted-bg"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="time-slots">
                      <div className="time-slot muted-bg">
                        <span className="clock-icon">🕒</span>
                        <span>10:00 - 11:30</span>
                        <span className="users-icon">👤</span>
                        <span>5/10</span>
                      </div>
                      <div className="time-slot primary-bg">
                        <span className="clock-icon primary">🕒</span>
                        <span>14:00 - 15:30</span>
                        <span className="users-icon primary">👤</span>
                        <span>8/10</span>
                      </div>
                      <div className="time-slot muted-bg">
                        <span className="clock-icon">🕒</span>
                        <span>18:00 - 19:30</span>
                        <span className="users-icon">👤</span>
                        <span>2/10</span>
                      </div>
                    </div>
                    <button className="reserve-button">Réserver maintenant</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-overlay"></div>
    </section>
  );
}