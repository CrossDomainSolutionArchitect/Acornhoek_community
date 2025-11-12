import React from 'react';
import { CheckCircle, BookOpen, Award, Users, Zap, Building2 } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Unifying Acornhoek's Skills, Building a Stronger Local Economy</h1>
          <p className="page-description">
            The Acornhoek Open Community NPC is launching the 1360 Local Economy Hub: A central platform connecting our community's skilled tradespeople with opportunities, training, and growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button
              onClick={() => setCurrentPage('contact')}
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
              }}
            >
              Join the Hub - Register Your Skill
            </button>
            <button
              onClick={() => setCurrentPage('directory')}
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#059669',
                border: '2px solid #059669',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Find a Skilled Professional
            </button>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
          padding: '2.5rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          border: '2px solid #5eead4'
        }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#134e4a', marginBottom: '1.5rem' }}>
            For too long, our skilled builders, electricians, welders, mechanics, and creators have worked in isolation. The 1360 Local Economy Hub is changing that. We are bringing together the expertise of Acornhoek and Bushbuckridge into one powerful, collaborative network.
          </p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f766e', marginBottom: '1rem' }}>
            Our Mission
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#134e4a' }}>
            To empower local artisans, technicians, and youth by creating a unified platform that promotes skill sharing, entrepreneurship, and inclusive economic development.
          </p>
        </div>

        {/* Recruiting Fields */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center', color: '#1f2937' }}>
            We are currently recruiting founding members in these fields:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🧱', title: 'Construction', skills: 'Bricklaying, Tiling, Shower & Ceiling Installation' },
              { icon: '⚡', title: 'Electrical & Energy', skills: 'House Wiring, Solar Power, Appliance Repair, DSTV' },
              { icon: '🪵', title: 'Carpentry & Design', skills: 'Wardrobes, Kitchens, Couches, Embroidery' },
              { icon: '🚗', title: 'Automotive', skills: 'Basic Repairs & Servicing' },
              { icon: '🔩', title: 'Welding & Fabrication', skills: 'Aluminium Doors, Remote Gates, Custom Metalwork' }
            ].map((field, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '1rem',
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{field.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem', textAlign: 'center' }}>
                  {field.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.6', textAlign: 'center' }}>
                  {field.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #059669, #0d9488)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          textAlign: 'center',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>
            Join us. Let's build prosperity, together.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;