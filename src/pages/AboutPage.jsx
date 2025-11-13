import React from 'react';
import { ArrowRight, Wrench, Zap, Hammer, Car, Flame } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  const fields = [
    { icon: Hammer, title: 'Construction', skills: 'Bricklaying, Tiling, Shower & Ceiling Installation', color: '#F6B81A' },
    { icon: Zap, title: 'Electrical & Energy', skills: 'House Wiring, Solar Power, Appliance Repair, DSTV', color: '#3E7B44' },
    { icon: Wrench, title: 'Carpentry & Design', skills: 'Wardrobes, Kitchens, Couches, Embroidery', color: '#194E38' },
    { icon: Car, title: 'Automotive', skills: 'Basic Repairs & Servicing', color: '#F6B81A' },
    { icon: Flame, title: 'Welding & Fabrication', skills: 'Aluminium Doors, Remote Gates, Custom Metalwork', color: '#0E4734' }
  ];

  return (
    <>
      <style>{`
        .about-page {
          padding-top: 160px;
          min-height: 100vh;
        }

        .about-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 1.5rem 4rem;
        }

        /* HERO SECTION */
        .hero-section {
          background:
                      url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200') center/cover;
          padding: 2rem 2rem;
          border-radius: 16px;
          margin-bottom: 3rem;
          text-align: center;
          color: white;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #F6B81A;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          color: rgba(255, 255, 255, 0.95);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: #F6B81A;
          color: #0E4734;
          border: none;
          border-radius: 9999px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(246, 184, 26, 0.3);
        }

        .btn-primary:hover {
          background: #FFD966;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(246, 184, 26, 0.4);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          background: white;
          color: #0E4734;
          border: 2px solid white;
          border-radius: 9999px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: transparent;
          color: white;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
        }

        /* MISSION SECTION */
        .mission-section {
          background: linear-gradient(135deg, rgba(246, 184, 26, 0.1), rgba(62, 123, 68, 0.1));
          padding: 3rem;
          border-radius: 16px;
          margin-bottom: 4rem;
          border: 2px solid rgba(246, 184, 26, 0.2);
        }

        .mission-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #0E4734;
          margin-bottom: 2rem;
        }

        .mission-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #194E38;
          margin-bottom: 1rem;
        }

        .mission-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #0E4734;
        }

        /* FIELDS SECTION */
        .fields-section {
          margin-bottom: 4rem;
        }

        .fields-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 3rem;
          text-align: center;
          color: #0E4734;
        }

        .fields-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .field-card {
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
          text-align: center;
        }

        .field-card:hover {
          border-color: #F6B81A;
          box-shadow: 0 8px 24px rgba(246, 184, 26, 0.15);
          transform: translateY(-4px);
        }

        .field-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
        }

        .field-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0E4734;
          margin-bottom: 0.75rem;
        }

        .field-skills {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
        }

        /* CTA SECTION */
        .cta-section {
          background:
                      url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200') center/cover;
          background-blend-mode: overlay;
          padding: 4rem 3rem;
          border-radius: 16px;
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #F6B81A;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hero-section, .mission-section, .cta-section {
            padding: 3rem 1.5rem;
          }
          .fields-title {
            font-size: 1.8rem;
          }
          .cta-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="about-page">
        <div className="about-container">
          {/* HERO SECTION */}
          <section className="hero-section">
            <h1 className="hero-title">
              Unifying Acornhoek's Skills, Building a Stronger Local Economy
            </h1>
            <p className="hero-description">
              The Acornhoek Open Community NPC is launching the 1360 Local Economy Hub: A central platform connecting our community's skilled tradespeople with opportunities, training, and growth.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => setCurrentPage('contact')}
                className="btn-primary"
              >
                Join the Hub - Register Your Skill
              </button>
              <button
                onClick={() => setCurrentPage('directory')}
                className="btn-secondary"
              >
                Find a Skilled Professional
              </button>
            </div>
          </section>

          {/* MISSION SECTION */}
          <section className="mission-section">
            <p className="mission-text">
              For too long, our skilled builders, electricians, welders, mechanics, and creators have worked in isolation. The 1360 Local Economy Hub is changing that. We are bringing together the expertise of Acornhoek and Bushbuckridge into one powerful, collaborative network.
            </p>
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-description">
              To empower local artisans, technicians, and youth by creating a unified platform that promotes skill sharing, entrepreneurship, and inclusive economic development.
            </p>
          </section>

          {/* FIELDS SECTION */}
          <section className="fields-section">
            <h2 className="fields-title">
              We are currently recruiting founding members in these fields:
            </h2>
            <div className="fields-grid">
              {fields.map((field, idx) => (
                <div key={idx} className="field-card">
                  <div className="field-icon" style={{ background: `${field.color}20`, color: field.color }}>
                    <field.icon size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="field-title">{field.title}</h3>
                  <p className="field-skills">{field.skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="cta-section">
            <h2 className="cta-title">
              Join us. Let's build prosperity, together.
            </h2>
            <p className="cta-subtitle">
              Be part of Acornhoek's economic transformation
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="btn-primary"
            >
              Get Started Today
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;