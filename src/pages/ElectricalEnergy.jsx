import React, { useState } from 'react';
import { CheckCircle, Award, Clock, BookOpen, Users, ArrowRight, Zap, Lightbulb } from 'lucide-react';

const ElectricalEnergy = () => {
  const [showDetails, setShowDetails] = useState(null);

  const courseModules = [
    {
      id: 1,
      title: "Electrical Theory Fundamentals",
      duration: "2-3 hours",
      topics: [
        "Atoms, charges, and valency",
        "Conductors, semiconductors, and insulators",
        "Current, EMF, work, and energy",
        "Key formulas and circuit parameters",
        "Basic laws and effects of electricity"
      ]
    },
    {
      id: 2,
      title: "Electrical Components & Devices",
      duration: "2-3 hours",
      topics: [
        "Resistors: types, applications, and principles",
        "Capacitors: functions and charging/discharging",
        "Inductors: magnetic fields and energy storage",
        "Series and parallel connections",
        "Device analysis and calculations"
      ]
    },
    {
      id: 3,
      title: "Electrical Laws & Principles",
      duration: "2-3 hours",
      topics: [
        "Ohm's Law and applications",
        "Joule's Law and power calculations",
        "Kirchhoff's Current and Voltage Laws",
        "Chemical effects of electric current",
        "Peltier, Thomson, and Seebeck effects"
      ]
    },
    {
      id: 4,
      title: "DC Circuits & Analysis",
      duration: "2-3 hours",
      topics: [
        "DC current sources in series and parallel",
        "Voltage and current dividers",
        "Mesh and nodal analysis",
        "Circuit topology and interconnections",
        "Star-Delta transformations"
      ]
    },
    {
      id: 5,
      title: "Electrical Safety & Practice",
      duration: "1-2 hours",
      topics: [
        "Electrical hazards and shock prevention",
        "Safety measures and precautions",
        "Static electricity and stray currents",
        "Workplace safety procedures",
        "Equipment handling guidelines"
      ]
    }
  ];

  const services = [
    {
      icon: "⚡",
      title: "Domestic & Industrial Wiring",
      items: [
        "House wiring and electrical installations",
        "DB board installation and upgrades",
        "Lighting system design and installation",
        "Electrical safety inspections"
      ]
    },
    {
      icon: "🌞",
      title: "Solar Power Solutions",
      items: [
        "Solar panel installation",
        "Inverter and battery systems",
        "Solar water heating systems",
        "Energy efficiency consulting"
      ]
    },
    {
      icon: "📺",
      title: "Home Automation & Entertainment",
      items: [
        "DSTV installation and configuration",
        "CCTV and security system setup",
        "Home network installation",
        "Smart home device integration"
      ]
    },
    {
      icon: "❄️",
      title: "Appliance Repair",
      items: [
        "Refrigeration and air conditioning",
        "Washing machine and dryer repair",
        "Stove and oven electrical repairs",
        "Small appliance maintenance"
      ]
    }
  ];

  const learningOutcomes = [
    "Understand atoms, charges, and electrical conductivity",
    "Master Ohm's Law, Kirchhoff's Laws, and Joule's Law",
    "Analyze DC circuits using mesh and nodal methods",
    "Work safely with electrical components and systems",
    "Calculate voltage, current, resistance, and power",
    "Understand resistors, capacitors, and inductors",
    "Apply electrical safety procedures and precautions",
    "Troubleshoot basic electrical circuits effectively"
  ];

  const careerPaths = [
    { title: "Residential Electrician", desc: "Home wiring and maintenance" },
    { title: "Industrial Electrician", desc: "Commercial and industrial installations" },
    { title: "Solar Technician", desc: "Renewable energy systems" },
    { title: "Maintenance Technician", desc: "Equipment repair and servicing" }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Electrical Fundamentals Training</h1>
          <p className="page-description">
            Build a solid foundation in electrical technology - From basic theory to practical applications
          </p>
        </div>

        {/* Course Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #ea580c, #dc2626)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="https://cdn01.alison-static.net/courses/1522/alison_courseware_intro_1522.jpg" 
                alt="Electrical Training"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '0.75rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Zap size={40} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
                  Electrical Fundamentals Course
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: '1.6' }}>
                Master electrical technology fundamentals and build essential skills for a thriving career
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Duration</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>10-12 Hours</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Modules</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>5 Comprehensive</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Level</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Beginner to Intermediate</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Certificate</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>CPD Accredited</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open('https://alison.com/course/electrical-fundamentals', '_blank')}
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#ea580c',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1.1rem',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Enroll Now - It's Free <ArrowRight size={20} />
          </button>
        </div>

        {/* What You'll Learn */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            What You Will Learn
          </h2>
          <div style={{ 
            background: 'linear-gradient(135deg, #fed7aa, #fdba74)', 
            padding: '2.5rem', 
            borderRadius: '1rem',
            border: '2px solid #fb923c'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {learningOutcomes.map((outcome, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem',
                  padding: '0.75rem',
                  background: 'white',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <CheckCircle size={24} style={{ color: '#ea580c', flexShrink: 0, marginTop: '0.125rem' }} />
                  <span style={{ fontSize: '1.05rem', color: '#374151', lineHeight: '1.6' }}>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Course Modules
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {courseModules.map((module) => (
              <div key={module.id} className="service-card" style={{ cursor: 'pointer' }}
                onClick={() => setShowDetails(showDetails === module.id ? null : module.id)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                      Module {module.id}: {module.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ea580c' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{module.duration}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      color: '#ea580c',
                      transform: showDetails === module.id ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </div>
                
                {showDetails === module.id && (
                  <div style={{ 
                    marginTop: '1.5rem', 
                    paddingTop: '1.5rem', 
                    borderTop: '2px solid #f3f4f6',
                    animation: 'fadeIn 0.3s ease-out'
                  }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: '#374151' }}>
                      Topics Covered:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                      {module.topics.map((topic, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: '#ea580c',
                            flexShrink: 0
                          }} />
                          <span style={{ color: '#4b5563', fontSize: '1rem' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Career Opportunities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {careerPaths.map((career, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #fed7aa, #fdba74)',
                borderRadius: '1rem',
                border: '2px solid #fb923c',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <Lightbulb size={32} style={{ color: '#ea580c', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                  {career.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>{career.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Our Electrical & Energy Services
          </h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {service.icon} {service.title}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: '#4b5563',
                      lineHeight: '1.6'
                    }}>
                      <CheckCircle size={18} style={{ color: '#ea580c', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Meet Our Electrical Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'David Makamu',
                role: 'Licensed Electrician',
                experience: '14 years',
                quote: 'Safety first, quality always. Every electrical installation must meet the highest standards.',
                commitment: 'Advancing solar energy adoption'
              },
              {
                name: 'Grace Mashego',
                role: 'Solar Energy Specialist',
                experience: '7 years',
                quote: 'Renewable energy is the future, and that future starts with proper training today.',
                commitment: 'Empowering communities with clean energy'
              }
            ].map((member, idx) => (
              <div key={idx} style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#ea580c';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ea580c, #dc2626)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)'
                }}>
                  ⚡
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#ea580c', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {member.role}
                </p>
                <div style={{
                  background: '#fed7aa',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #ea580c'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#9a3412', fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{member.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.85rem', color: '#6b7280' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#111827' }}>{member.experience}</div>
                    <div>Experience</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: '600', marginTop: '1rem' }}>
                  💪 {member.commitment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Training Centers */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Physical Training & Workshops
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{
               backgroundImage: 'url(https://www.ehlanzenicollege.co.za/wp-content/uploads/2021/04/Engineering-studies-N1-to-N6-1024x1024.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid #86efac',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative'
            }}>
              
              <button
                onClick={() => window.open('https://www.ehlanzenicollege.co.za/', '_blank')}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#16a34a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#15803d'}
                onMouseOut={(e) => e.currentTarget.style.background = '#16a34a'}
              >
                Apply for N1-N6 Program
              </button>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fed7aa, #fdba74)',
              border: '2px solid #fb923c',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                🔌
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#9a3412', marginBottom: '1rem' }}>
                1360 Hub Electrical Lab
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#c2410c', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Practical Electrical Training</strong><br />
                House wiring, solar installation<br />
                Safety protocols & troubleshooting<br />
                Acornhoek, Mpumalanga
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#ea580c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
                onMouseOut={(e) => e.currentTarget.style.background = '#ea580c'}
              >
                Request Service
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1f2937, #111827)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1rem' }}>
            Ready to Power Up Your Electrical Career?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Master theory online → Gain TVET certification → Practice in our electrical lab
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('https://alison.com/course/electrical-fundamentals', '_blank')}
              style={{
                padding: '1.25rem 3rem',
                background: 'linear-gradient(135deg, #ea580c, #dc2626)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(234, 88, 12, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(234, 88, 12, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(234, 88, 12, 0.4)';
              }}
            >
              Start Free Online Course <ArrowRight size={20} />
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              style={{
                padding: '1.25rem 3rem',
                background: 'white',
                color: '#1f2937',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalEnergy;