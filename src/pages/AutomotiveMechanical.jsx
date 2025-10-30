import React from 'react';

const AutomotiveMechanical = () => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Automotive & Mechanical Services</h1>
          <p className="page-description">
            Vehicle servicing, repairs, and community training programs
          </p>
        </div>

        <div className="services-grid">
    
        <div className="service-card">
          <h3>🚗 Basic Vehicle Servicing</h3>
          <ul>
            <li>Oil changes and filter replacement</li>
            <li>Brake system inspection and repair</li>
            <li>Battery testing and replacement</li>
            <li>Tire rotation and balancing</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🔧 Diagnostic Services</h3>
          <ul>
            <li>Engine diagnostics and troubleshooting</li>
            <li>Electrical system repairs</li>
            <li>Suspension and steering repairs</li>
            <li>Exhaust system services</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>👨‍🏫 Training Programs</h3>
          <ul>
            <li>Basic automotive maintenance workshops</li>
            <li>Youth mechanic training programs</li>
            <li>Diagnostic equipment training</li>
            <li>Small engine repair courses</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🛠️ Community Services</h3>
          <ul>
            <li>Affordable vehicle inspections</li>
            <li>Emergency roadside assistance</li>
            <li>Fleet maintenance for local businesses</li>
            <li>Vehicle safety workshops</li>
          </ul>
        </div>
      </div>

     
    </div>
    </section>
  );
};

export default AutomotiveMechanical;