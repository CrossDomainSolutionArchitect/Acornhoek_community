import React from 'react';
import { CheckCircle, BookOpen, Award, Users, Zap, Building2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">1360 Local Economy Hub</h1>
          <p className="page-description">
            Empowering Acornhoek & Bushbuckridge by unifying local skills and driving sustainable economic growth
          </p>
        </div>

        {/* Training Partners Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #059669, #0d9488)',
          color: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>
            Our Training Partners
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ 
              textAlign: 'center',
              background: 'white',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg" 
                alt="Alison Free Courses"
                style={{ 
                  height: '60px',
                  margin: '0 auto 1.5rem',
                  display: 'block'
                }}
              />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937' }}>Alison Online</h3>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6' }}>
                Free CPD accredited courses in carpentry, electrical, welding, automotive & construction
              </p>
            </div>
            <div style={{ 
              textAlign: 'center',
              background: 'white',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://www.ehlanzenicollege.co.za/wp-content/uploads/2021/01/Ehlanzeni-TVET-College.png" 
                alt="Ehlanzeni TVET College"
                style={{ 
                  height: '60px',
                  margin: '0 auto 1.5rem',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937' }}>Ehlanzeni TVET College</h3>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6' }}>
                Mapulaneng Campus - Practical training & certification in engineering trades N1-N6
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="vision-mission-grid">
          <div className="vision-box">
            <h3 className="box-title">Our Vision</h3>
            <p className="box-text">
              To build a thriving local economy by uniting skilled individuals, fostering entrepreneurship, and creating shared prosperity through quality education and hands-on training.
            </p>
          </div>

          <div className="mission-box">
            <h3 className="box-title">Our Mission</h3>
            <p className="box-text">
              Empower local artisans, youth, and technicians through accessible online learning, practical TVET training, mentorship, and market access while promoting community collaboration.
            </p>
          </div>
        </div>

        {/* Training Pathways */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Dual Training Pathway
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Online Learning Path */}
            <div style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              borderRadius: '1rem',
              border: '2px solid #60a5fa',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <BookOpen size={48} style={{ color: '#2563eb', margin: '0 auto' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1e40af', marginBottom: '1rem', textAlign: 'center' }}>
                Online Theory (Alison)
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                {[
                  'Free CPD accredited courses',
                  'Study at your own pace',
                  'Foundational knowledge',
                  'Digital certificates',
                  'Accessible anywhere, anytime'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} style={{ color: '#2563eb', flexShrink: 0 }} />
                    <span style={{ color: '#1e3a8a', fontSize: '1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Training Path */}
            <div style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #fed7aa, #fdba74)',
              borderRadius: '1rem',
              border: '2px solid #fb923c',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <Building2 size={48} style={{ color: '#ea580c', margin: '0 auto' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#9a3412', marginBottom: '1rem', textAlign: 'center' }}>
                Practical Training (TVET)
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                {[
                  'Hands-on workshop training',
                  'Accredited engineering programs',
                  'N1-N6 certification',
                  'Real equipment & tools',
                  'Industry-ready skills'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} style={{ color: '#ea580c', flexShrink: 0 }} />
                    <span style={{ color: '#7c2d12', fontSize: '1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Join */}
        <div className="why-choose-box">
          <h2 className="why-choose-title">Why Join 1360 Hub?</h2>
          <div className="features-grid">
            {[
              'Access to free online courses & local TVET training',
              'Combined theoretical & practical learning',
              'Entrepreneurship & business support',
              'Hands-on mentorship from local experts',
              'Community development projects',
              'Access to market opportunities',
              'Sustainable & inclusive growth',
              'Industry-recognized certifications'
            ].map((item, i) => (
              <div key={i} className="feature-item">
                <CheckCircle className="feature-icon" size={20} />
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TVET College Info */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
            padding: '3rem',
            borderRadius: '1rem',
            border: '2px solid #86efac'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#166534', marginBottom: '2rem', textAlign: 'center' }}>
              Ehlanzeni TVET College - Mapulaneng Campus
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#15803d', marginBottom: '1rem' }}>
                  📍 Location
                </h3>
                <p style={{ color: '#166534', lineHeight: '1.8' }}>
                  Manyeleti Road, Private Bag X413<br />
                  Acornhoek 1360, Mpumalanga<br />
                  Adjacent to Kruger National Park
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#15803d', marginBottom: '1rem' }}>
                  📚 Programs Offered
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, color: '#166534' }}>
                  <li>• Electrical Engineering (N1-N6)</li>
                  <li>• Mechanical Engineering (N1-N6)</li>
                  <li>• Civil Engineering (N1-N6)</li>
                  <li>• Welding & Fabrication</li>
                  <li>• Construction Studies</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#15803d', marginBottom: '1rem' }}>
                  📞 Contact
                </h3>
                <p style={{ color: '#166534', lineHeight: '1.8' }}>
                  Tel: 013 590 0016<br />
                  Email: jdibakoane@ehlanzenicollege.co.za<br />
                  Website: ehlanzenicollege.co.za
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="team-values-section">
          <h2 className="values-section-title">What Drives Us</h2>
          <div className="values-cards-grid">
            {[
              {icon: '🎯', title: 'Excellence', text: 'High-quality training combining online theory and hands-on practice'},
              {icon: '🤝', title: 'Collaboration', text: 'Partnership between Alison, TVET College, and local experts'},
              {icon: '💡', title: 'Innovation', text: 'Blended learning approach for maximum skill development'},
              {icon: '❤️', title: 'Empowerment', text: 'Accessible education and industry-recognized certifications'}
            ].map((v, i) => (
              <div key={i} className="value-detail-card">
                <div className="value-detail-icon">{v.icon}</div>
                <h3 className="value-detail-title">{v.title}</h3>
                <p className="value-detail-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #1f2937, #111827)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          textAlign: 'center',
          marginTop: '4rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1rem' }}>
            Ready to Transform Your Future?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Start with free online courses and advance to certified practical training
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.location.href = '/contact'}
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Join 1360 Hub
            </button>
            <button
              onClick={() => window.open('https://www.ehlanzenicollege.co.za/', '_blank')}
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#1f2937',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Visit TVET College
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;