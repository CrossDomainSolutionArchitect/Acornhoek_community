import React, { useState } from 'react';
import { CheckCircle, Award, Clock, BookOpen, Users, ArrowRight } from 'lucide-react';

const AutomotiveMechanical = () => {
  const [showDetails, setShowDetails] = useState(null);

  const courseModules = [
    {
      id: 1,
      title: "Engine Types and Configurations",
      duration: "2-3 hours",
      topics: [
        "Understanding engine fundamentals",
        "Engine types and configurations",
        "Fuel system basics and operation",
        "Engine performance diagnostics"
      ]
    },
    {
      id: 2,
      title: "Drivetrain, Suspension & Brakes",
      duration: "3-4 hours",
      topics: [
        "Transmission diagnosis and repair",
        "Steering system alignment",
        "Suspension system maintenance",
        "Brake system inspection and repair"
      ]
    },
    {
      id: 3,
      title: "Electrical Systems",
      duration: "2-3 hours",
      topics: [
        "Automotive circuit operation",
        "Lighting safety standards",
        "Electronic control systems",
        "Electrical troubleshooting"
      ]
    },
    {
      id: 4,
      title: "Vehicle Maintenance & Workshop Management",
      duration: "2-3 hours",
      topics: [
        "Routine maintenance procedures",
        "Vehicle inspection protocols",
        "Client interaction best practices",
        "Ethical automotive practice"
      ]
    }
  ];

  const services = [
    {
      icon: "🚗",
      title: "Basic Vehicle Servicing",
      items: [
        "Oil changes and filter replacement",
        "Brake system inspection and repair",
        "Battery testing and replacement",
        "Tire rotation and balancing"
      ]
    },
    {
      icon: "🔧",
      title: "Diagnostic Services",
      items: [
        "Engine diagnostics and troubleshooting",
        "Electrical system repairs",
        "Suspension and steering repairs",
        "Exhaust system services"
      ]
    },
    {
      icon: "🛠️",
      title: "Community Services",
      items: [
        "Affordable vehicle inspections",
        "Emergency roadside assistance",
        "Fleet maintenance for local businesses",
        "Vehicle safety workshops"
      ]
    }
  ];

  const learningOutcomes = [
    "Master the latest automotive industry standards and techniques",
    "Diagnose and resolve complex transmission and drivetrain issues",
    "Perform critical brake maintenance and suspension repairs",
    "Troubleshoot automotive electrical and electronic control systems",
    "Execute professional vehicle maintenance and inspection procedures",
    "Apply ethical practices in client interactions and workshop management"
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Automotive & Mechanical Training</h1>
          <p className="page-description">
            Comprehensive car mechanic training program - From engine fundamentals to advanced diagnostics
          </p>
        </div>

        {/* Course Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #059669, #0d9488)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="https://cdn01.alison-static.net/courses/7099/alison_courseware_intro_7099.jpg" 
                alt="Car Mechanic Training"
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
                <Award size={40} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
                  Free Comprehensive Car Mechanic Training
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: '1.6' }}>
                Gain practical knowledge and prepare for a thriving career in automotive mechanics
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Duration</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>10-15 Hours</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Modules</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>4 Comprehensive</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Level</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Beginner to Advanced</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Certificate</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Available</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open('https://alison.com/course/comprehensive-car-mechanic-training', '_blank')}
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#059669',
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
            background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', 
            padding: '2.5rem', 
            borderRadius: '1rem',
            border: '2px solid #86efac'
          }}>
            <div style={{ display: 'grid', gap: '1rem' }}>
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
                  <CheckCircle size={24} style={{ color: '#059669', flexShrink: 0, marginTop: '0.125rem' }} />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{module.duration}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      color: '#059669',
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
                            background: '#059669',
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

        {/* Our Services */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Our Automotive Services
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
                      <CheckCircle size={18} style={{ color: '#059669', flexShrink: 0, marginTop: '0.25rem' }} />
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
            Meet Our Automotive Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Thabo Maluleke',
                role: 'Lead Automotive Technician',
                experience: '12 years',
                quote: 'Every vehicle tells a story. My job is to listen and restore it to peak performance.',
                commitment: 'Training the next generation of mechanics'
              },
              {
                name: 'Sizwe Ngwenya',
                role: 'Diagnostic Specialist',
                experience: '8 years',
                quote: 'Precision diagnostics combined with hands-on training creates skilled technicians.',
                commitment: 'Mentoring youth in automotive technology'
              }
            ].map((member, idx) => (
              <div key={idx} style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#059669';
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
                  background: 'linear-gradient(135deg, #059669, #0d9488)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
                }}>
                  👨‍🔧
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#059669', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {member.role}
                </p>
                <div style={{
                  background: '#f0fdf4',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #059669'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#166534', fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{member.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.85rem', color: '#6b7280' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#111827' }}>{member.experience}</div>
                    <div>Experience</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#059669', fontWeight: '600', marginTop: '1rem' }}>
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
            {/* Ehlanzeni TVET */}
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

            {/* 1360 Hub Workshop */}
            <div style={{
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              border: '2px solid #60a5fa',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                🔧
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1e40af', marginBottom: '1rem' }}>
                1360 Hub Community Workshop
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#1e40af', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Practical Skills Training</strong><br />
                Basic vehicle servicing & repairs<br />
                Acornhoek, Mpumalanga
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.background = '#2563eb'}
              >
                Join Workshop Program
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
            Ready to Start Your Automotive Career?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Start with free online theory → Progress to hands-on TVET training → Join our community workshop
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('https://alison.com/course/comprehensive-car-mechanic-training', '_blank')}
              style={{
                padding: '1.25rem 3rem',
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(5, 150, 105, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(5, 150, 105, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(5, 150, 105, 0.4)';
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

export default AutomotiveMechanical;