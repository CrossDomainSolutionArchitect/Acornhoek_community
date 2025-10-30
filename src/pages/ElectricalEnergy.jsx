import React from 'react';

const ElectricalEnergy = () => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Electrical & Energy Services</h1>
          <p className="page-description">
            Complete electrical solutions including solar power and home automation
          </p>
        </div>

        <div className="services-grid">
        <div className="service-card">
          <h3>⚡ Domestic & Industrial Wiring</h3>
          <ul>
            <li>House wiring and electrical installations</li>
            <li>DB board installation and upgrades</li>
            <li>Lighting system design and installation</li>
            <li>Electrical safety inspections</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🌞 Solar Power Solutions</h3>
          <ul>
            <li>Solar panel installation</li>
            <li>Inverter and battery systems</li>
            <li>Solar water heating systems</li>
            <li>Energy efficiency consulting</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>📺 Home Automation & Entertainment</h3>
          <ul>
            <li>DSTV installation and configuration</li>
            <li>CCTV and security system setup</li>
            <li>Home network installation</li>
            <li>Smart home device integration</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>❄️ Appliance Repair</h3>
          <ul>
            <li>Refrigeration and air conditioning</li>
            <li>Washing machine and dryer repair</li>
            <li>Stove and oven electrical repairs</li>
            <li>Small appliance maintenance</li>
          </ul>
        </div>
      </div>
   
    </div>
    </section>
  );
};

export default ElectricalEnergy;