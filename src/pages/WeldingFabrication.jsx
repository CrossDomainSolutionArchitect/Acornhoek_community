import React, { useState } from 'react';
import { CheckCircle, Award, Clock, BookOpen, Users, ArrowRight, Flame, Wrench } from 'lucide-react';

const WeldingFabrication = () => {
  const [showDetails, setShowDetails] = useState(null);

  const courseModules = [
    {
      id: 1,
      title: "Welding Fundamentals & Classification",
      duration: "2-3 hours",
      topics: [
        "Principles of welding and joining",
        "Classification of welding processes",
        "Types of joints and their applications",
        "Welding terminology and basics",
        "Introduction to welding metallurgy"
      ]
    },
    {
      id: 2,
      title: "Welding Processes & Techniques",
      duration: "3-4 hours",
      topics: [
        "Arc welding power sources",
        "Metal transfer in welding",
        "Different welding techniques",
        "Process selection criteria",
        "Equipment setup and operation"
      ]
    },
    {
      id: 3,
      title: "Brazing & Soldering",
      duration: "2-3 hours",
      topics: [
        "Principles of brazing processes",
        "Brazing vs welding comparison",
        "Soldering techniques and applications",
        "Advantages and limitations",
        "Material compatibility considerations"
      ]
    },
    {
      id: 4,
      title: "Adhesive Bonding & Joining",
      duration: "2-3 hours",
      topics: [
        "Adhesive bonding applications",
        "Chemical joining processes",
        "Solid-liquid joining methods",
        "Heat input effects on joints",
        "Best practices for strong bonds"
      ]
    },
    {
      id: 5,
      title: "Physics & Quality Control",
      duration: "2-3 hours",
      topics: [
        "Physics of welding processes",
        "Weldability and defect identification",
        "Cracking prevention methods",
        "Quality inspection techniques",
        "Troubleshooting common issues"
      ]
    }
  ];

  const services = [
    {
      icon: "🚪",
      title: "Aluminium & Security Solutions",
      items: [
        "Custom aluminium door fabrication",
        "Window frames and security bars",
        "Burglar proofing and security gates",
        "Sliding door systems"
      ]
    },
    {
      icon: "🔧",
      title: "Gate & Automation Systems",
      items: [
        "Remote-controlled gate installation",
        "Gate motor setup and repair",
        "Custom gate design and fabrication",
        "Intercom and access control systems"
      ]
    },
    {
      icon: "🏭",
      title: "Custom Metal Fabrication",
      items: [
        "Structural steel work",
        "Metal furniture and fittings",
        "Agricultural equipment repair",
        "Artistic metalwork and sculptures"
      ]
    },
    {
      icon: "🛠️",
      title: "Repair & Maintenance",
      items: [
        "Metal equipment repair",
        "Welding repairs for vehicles",
        "Fence and gate maintenance",
        "Emergency repair services"
      ]
    }
  ];

  const learningOutcomes = [
    "Understand welding and joining principles",
    "Master various welding processes and techniques",
    "Apply brazing, soldering, and adhesive bonding",
    "Use arc-welding power sources effectively",
    "Identify and prevent welding defects",
    "Perform quality inspection and troubleshooting",
    "Understand the physics of welding",
    "Achieve smooth, professional welding results"
  ];

  const careerPaths = [
    { title: "Structural Welder", desc: "Construction and infrastructure projects" },
    { title: "Fabrication Specialist", desc: "Custom metalwork and manufacturing" },
    { title: "Maintenance Welder", desc: "Equipment repair and industrial maintenance" },
    { title: "Artistic Welder", desc: "Sculptures and decorative metalwork" }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Welding & Joining Technologies</h1>
          <p className="page-description">
            Master professional welding techniques - From basics to advanced fabrication skills
          </p>
        </div>

        {/* Course Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #475569, #334155)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="https://cdn01.alison-static.net/courses/2324/alison_courseware_intro_2324.jpg" 
                alt="Welding Training"
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
                <Flame size={40} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
                  Basics of Welding & Joining Technologies
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: '1.6' }}>
                Learn essential welding skills for industrial and mechanical applications - CPD Accredited
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
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>5 Comprehensive</div>
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
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>CPD Accredited</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open('https://alison.com/course/basics-of-welding-and-joining-technologies', '_blank')}
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#475569',
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
            background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', 
            padding: '2.5rem', 
            borderRadius: '1rem',
            border: '2px solid #94a3b8'
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
                  <CheckCircle size={24} style={{ color: '#475569', flexShrink: 0, marginTop: '0.125rem' }} />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{module.duration}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      color: '#475569',
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
                            background: '#475569',
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
                background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
                borderRadius: '1rem',
                border: '2px solid #94a3b8',
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
                <Wrench size={32} style={{ color: '#475569', marginBottom: '1rem' }} />
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
            Our Welding & Fabrication Services
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
                      <CheckCircle size={18} style={{ color: '#475569', flexShrink: 0, marginTop: '0.25rem' }} />
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
            Meet Our Welding Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Joseph Rikhotso',
                role: 'Master Welder & Fabricator',
                experience: '20 years',
                quote: 'Precision welding creates strong bonds that last a lifetime. Quality is never an accident.',
                commitment: 'Preserving metalwork craftsmanship'
              },
              {
                name: 'Thembi Mabuza',
                role: 'Metal Fabrication Specialist',
                experience: '11 years',
                quote: 'From security gates to artistic sculptures, every weld tells a story of skill and dedication.',
                commitment: 'Breaking barriers for women in welding'
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
                e.currentTarget.style.borderColor = '#475569';
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
                  background: 'linear-gradient(135deg, #475569, #334155)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(71, 85, 105, 0.3)'
                }}>
                  🔥
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {member.role}
                </p>
                <div style={{
                  background: '#e2e8f0',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #475569'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#334155', fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{member.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.85rem', color: '#6b7280' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#111827' }}>{member.experience}</div>
                    <div>Experience</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '600', marginTop: '1rem' }}>
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
          <div 
  style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '2rem' 
  }}
>
  <div 
    style={{
      position: 'relative',
      border: '2px solid #86efac',
      borderRadius: '1rem',
      overflow: 'hidden',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}
  >
    {/* Background image */}
    <div
      style={{
        backgroundImage: `url('https://www.ehlanzenicollege.co.za/wp-content/uploads/2021/04/Engineering-studies-N1-to-N6-1024x1024.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        inset: 0,
        filter: 'brightness(0.4)',
        zIndex: 0,
      }}
    ></div>

    {/* Foreground content */}
    <div style={{
      position: 'relative',
      zIndex: 1,
      padding: '2rem',
      color: 'white',
    }}>
      <img 
        src="https://www.ehlanzenicollege.co.za/wp-content/uploads/2021/01/Ehlanzeni-TVET-College.png" 
        alt="Ehlanzeni TVET"
        style={{ height: '60px', margin: '0 auto 1.5rem', objectFit: 'contain' }}
      />
      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#bbf7d0', marginBottom: '1rem' }}>
        Ehlanzeni TVET College
      </h3>
      <p style={{ fontSize: '0.95rem', color: '#dcfce7', marginBottom: '1rem', lineHeight: '1.6' }}>
        <strong>Mapulaneng Campus</strong><br />
        Welding & Metalwork Programs<br />
        Fabrication & Manufacturing<br />
        Manyeleti Road, Acornhoek 1360
      </p>
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
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.background = '#15803d'}
        onMouseOut={(e) => e.currentTarget.style.background = '#16a34a'}
      >
        Apply for Programs
      </button>
    </div>

</div>

            <div style={{
              background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
              border: '2px solid #94a3b8',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#475569',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                🛠️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#334155', marginBottom: '1rem' }}>
                1360 Hub Fabrication Shop
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Practical Welding & Metalwork</strong><br />
                Security installations, gates<br />
                Custom fabrication projects<br />
                Acornhoek, Mpumalanga
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#475569',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#334155'}
                onMouseOut={(e) => e.currentTarget.style.background = '#475569'}
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
            Ready to Master Welding & Fabrication?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Learn fundamentals online → Get TVET certified → Practice in our fabrication shop
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('https://alison.com/course/basics-of-welding-and-joining-technologies', '_blank')}
              style={{
                padding: '1.25rem 3rem',
                background: 'linear-gradient(135deg, #475569, #334155)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(71, 85, 105, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(71, 85, 105, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(71, 85, 105, 0.4)';
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

export default WeldingFabrication;