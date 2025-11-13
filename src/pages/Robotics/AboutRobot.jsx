import React from 'react';
import { Brain, BookOpen, Users, Rocket, Code, Cpu, Zap, Award } from 'lucide-react';

const AboutRobot = ({ setCurrentPage }) => {
  const features = [
    { icon: Code, title: 'Block-based and Python coding', desc: 'From beginners to advanced levels' },
    { icon: Cpu, title: 'Physical robotics kits', desc: 'Rovers, humanoids: hands-on builds' },
    { icon: Brain, title: 'AI, IoT and robotics projects', desc: 'Sensors, automation, real-world applications' },
    { icon: Rocket, title: 'Grade-wise progression', desc: 'Foundation to senior levels' }
  ];

  const pillars = [
    {
      icon: BookOpen,
      title: 'Curriculum & Standards',
      description: 'Our program aligns with the national pilot for Coding & Robotics (Grades R-9) run by the DBE, and uses internationally benchmarked materials and hands-on kits inspired by global curricula.',
      color: '#F6B81A'
    },
    {
      icon: Users,
      title: 'Teacher Training & Support',
      description: 'We recognize that effective robotics education requires skilled educators. We partner with higher-education institutions and training bodies to up-skill teachers, following the model described by DBE.',
      color: '#3E7B44'
    },
    {
      icon: Award,
      title: 'Youth Empowerment & Pathways',
      description: 'Beyond the classroom, our robotics initiative seeks to open career pathways—internships, certifications, employment. We believe robotics is a gateway to inclusion, innovation and leadership.',
      color: '#194E38'
    }
  ];

  return (
    <>
      <style>{`
        .robotics-about-page {
          padding-top: 120px;
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fffe 0%, #ffffff 100%);
        }

        .robotics-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 1.5rem 4rem;
        }

        /* HERO SECTION */
        .robotics-hero {
          background: 
                      url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200') center/cover;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          margin-bottom: 3rem;
          text-align: center;
          color: white;
        }

        .robotics-hero-title {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #F6B81A;
        }

        .robotics-hero-text {
          font-size: 1.15rem;
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto 1rem;
          color: rgba(255, 255, 255, 0.95);
        }

        .robotics-hero-quote {
          font-size: 1rem;
          font-style: italic;
          color: rgba(246, 184, 26, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .robotics-hero-title {
            font-size: 1.8rem;
          }
          .robotics-hero-text {
            font-size: 1rem;
          }
        }

        /* PILLARS SECTION */
        .pillars-section {
          margin-bottom: 4rem;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .pillar-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .pillar-card:hover {
          border-color: #F6B81A;
          box-shadow: 0 8px 24px rgba(246, 184, 26, 0.15);
          transform: translateY(-4px);
        }

        .pillar-icon {
          width: 56px;
          height: 56px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .pillar-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0E4734;
          margin-bottom: 1rem;
        }

        .pillar-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #4b5563;
        }

        /* EXPERIENCE SECTION */
        .experience-section {
          background: linear-gradient(135deg, rgba(246, 184, 26, 0.08), rgba(62, 123, 68, 0.08));
          padding: 3rem;
          border-radius: 16px;
          margin-bottom: 3rem;
          border: 2px solid rgba(246, 184, 26, 0.2);
        }

        .experience-title {
          font-size: 2rem;
          font-weight: 900;
          color: #0E4734;
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .experience-card {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(246, 184, 26, 0.2);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: #F6B81A;
          box-shadow: 0 4px 16px rgba(246, 184, 26, 0.1);
        }

        .experience-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: linear-gradient(135deg, #F6B81A20, #3E7B4420);
          color: #194E38;
        }

        .experience-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0E4734;
          margin-bottom: 0.5rem;
        }

        .experience-card-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.5;
        }

        /* CTA SECTION */
        .robotics-cta {
          background: linear-gradient(135deg, #194E38, #0E4734),
                      url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200') center/cover;
          background-blend-mode: overlay;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: white;
          margin-bottom: 3rem;
        }

        .robotics-cta-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #F6B81A;
          margin-bottom: 1rem;
        }

        .robotics-cta-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
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

        .btn-cta-primary:hover {
          background: #FFD966;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(246, 184, 26, 0.4);
        }

        .btn-cta-secondary {
          padding: 1rem 2rem;
          background: transparent;
          color: white;
          border: 2px solid white;
          border-radius: 9999px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-cta-secondary:hover {
          background: white;
          color: #0E4734;
        }

        /* NEWSLETTER SECTION */
        .newsletter-section {
          background: linear-gradient(135deg, #0E4734, #194E38);
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          color: white;
        }

        .newsletter-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #F6B81A;
          margin-bottom: 0.75rem;
        }

        .newsletter-subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          max-width: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .newsletter-input {
          flex: 1;
          min-width: 250px;
          padding: 0.9rem 1.25rem;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(246, 184, 26, 0.3);
          border-radius: 9999px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .newsletter-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.2);
          border-color: #F6B81A;
        }

        .newsletter-button {
          padding: 0.9rem 2rem;
          background: #F6B81A;
          color: #0E4734;
          border: none;
          border-radius: 9999px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-button:hover {
          background: #FFD966;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .robotics-hero,
          .pillars-section,
          .experience-section,
          .robotics-cta,
          .newsletter-section {
            padding: 2rem 1.5rem;
          }
          .robotics-cta-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="robotics-about-page">
        <div className="robotics-container">
          {/* HERO SECTION */}
          <section className="robotics-hero">
            <h1 className="robotics-hero-title">Why Robotics Matters</h1>
            <p className="robotics-hero-text">
              At 1360 Robotics Hub, we believe robotics is not just about machines—it's about unlocking potential. As the Department of Basic Education points out:
            </p>
            <p className="robotics-hero-quote">
              "Future careers require persons with digital skills that will equip and enable them to function effectively in a digital era."
            </p>
          </section>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Our robotics initiative blends hands-on learning, coding, AI, and physical computing to ensure South African youth get real access to tomorrow's opportunities.
          </p>

          {/* PILLARS SECTION */}
          <section className="pillars-section">
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon" style={{ background: `${pillar.color}20`, color: pillar.color }}>
                    <pillar.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h2 className="pillar-title">{pillar.title}</h2>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section className="experience-section">
            <h2 className="experience-title">What You'll Experience</h2>
            <div className="experience-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="experience-card">
                  <div className="experience-icon">
                    <feature.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="experience-card-title">{feature.title}</h3>
                  <p className="experience-card-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="robotics-cta">
            <h2 className="robotics-cta-title">Join 1360 Robotics Hub's Mission</h2>
            <p className="robotics-cta-subtitle">
              Be part of the movement empowering South African youth with the skills for tomorrow.
            </p>
            <div className="cta-buttons">
              <button onClick={() => setCurrentPage('contact')} className="btn-cta-primary">
                Apply Now
              </button>
              <button onClick={() => setCurrentPage('contact')} className="btn-cta-secondary">
                Get in Touch
              </button>
            </div>
          </section>

          {/* NEWSLETTER SECTION */}
          <section className="newsletter-section">
            <h3 className="newsletter-title">Stay Connected</h3>
            <p className="newsletter-subtitle">
              Subscribe for updates, funding opportunities, and skills development news.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutRobot;