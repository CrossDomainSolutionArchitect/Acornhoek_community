import React from 'react';

const WeldingFabrication = () => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Welding & Fabrication Services</h1>
          <p className="page-description">
            Professional metalwork solutions from security installations to custom fabrication
          </p>
        </div>

        <div className="services-grid">
        <div className="service-card">
          <h3>🚪 Aluminium & Security Solutions</h3>
          <ul>
            <li>Custom aluminium door fabrication</li>
            <li>Window frames and security bars</li>
            <li>Burglar proofing and security gates</li>
            <li>Sliding door systems</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🔧 Gate & Automation Systems</h3>
          <ul>
            <li>Remote-controlled gate installation</li>
            <li>Gate motor setup and repair</li>
            <li>Custom gate design and fabrication</li>
            <li>Intercom and access control systems</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🏭 Custom Metal Fabrication</h3>
          <ul>
            <li>Structural steel work</li>
            <li>Metal furniture and fittings</li>
            <li>Agricultural equipment repair</li>
            <li>Artistic metalwork and sculptures</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>🛠️ Repair & Maintenance</h3>
          <ul>
            <li>Metal equipment repair</li>
            <li>Welding repairs for vehicles</li>
            <li>Fence and gate maintenance</li>
            <li>Emergency repair services</li>
          </ul>
        </div>
      </div>
  
    </div>
    </section>
  );
};

export default WeldingFabrication;