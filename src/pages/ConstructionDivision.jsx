import React, { useState } from 'react';
import { CheckCircle, Award, Clock, BookOpen, Users, ArrowRight, Hammer, Building2 } from 'lucide-react';

const ConstructionDivision = () => {
  const [showDetails, setShowDetails] = useState(null);

  const courseModules = [
    {
      id: 1,
      title: "Introduction to Bricklaying & Masonry",
      duration: "30-45 minutes",
      topics: [
        "History and evolution of masonry",
        "Duties and responsibilities of a bricklayer",
        "Types of masonry units: bricks, blocks, and stone",
        "Measuring out areas and maintaining structures",
        "Safety precautions and best practices"
      ]
    },
    {
      id: 2,
      title: "Tools & Equipment",
      duration: "30-45 minutes",
      topics: [
        "Hand tools: bolster chisels, spirit levels, pointing hawks",
        "Power tools and masonry equipment",
        "Proper tool selection and maintenance",
        "Advantages of each masonry tool",
        "Equipment safety guidelines"
      ]
    },
    {
      id: 3,
      title: "Cement, Concrete & Mortar",
      duration: "45-60 minutes",
      topics: [
        "Characteristics and applications of cement",
        "Fine and coarse aggregates storage",
        "Mixing concrete for various uses",
        "Mortar characteristics and sand content",
        "Field Settling Test for sand cleanliness",
        "Hand vs machine mixing techniques"
      ]
    },
    {
      id: 4,
      title: "Setting Out & Site Preparation",
      duration: "30-45 minutes",
      topics: [
        "Understanding 'setting out' importance",
        "Determining building location on site",
        "Distance between walls and level measurements",
        "Setting out rectangle buildings",
        "3:4:5 rule for right angles",
        "Site preparation before construction"
      ]
    },
    {
      id: 5,
      title: "Bricklaying Techniques",
      duration: "45-60 minutes",
      topics: [
        "Spreading and rolling mortar",
        "Cutting bricks and blocks",
        "Principles of constructing walls",
        "Bonding techniques and patterns",
        "Maintaining alignment and levels",
        "Quality control and finishing"
      ]
    }
  ];

  const services = [
    {
      icon: "🧱",
      title: "Bricklaying & Masonry",
      items: [
        "House construction and extensions",
        "Boundary walls and security walls",
        "Retaining walls and structural work",
        "Plastering and finishing"
      ]
    },
    {
      icon: "🏠",
      title: "Tiling & Flooring",
      items: [
        "Ceramic and porcelain tile installation",
        "Bathroom and shower tiling",
        "Floor leveling and preparation",
        "Pattern design and custom layouts"
      ]
    },
    {
      icon: "🚿",
      title: "Bathroom Installations",
      items: [
        "Complete bathroom renovations",
        "Shower enclosure installation",
        "Vanity and fixture fitting",
        "Waterproofing solutions"
      ]
    },
    {
      icon: "🛠️",
      title: "Ceiling & Finishing",
      items: [
        "Gypsum ceiling installation",
        "Cornice and molding work",
        "Painting and final finishes",
        "Quality inspection and touch-ups"
      ]
    }
  ];

  const learningOutcomes = [
    "Master basic bricklaying and masonry techniques",
    "Use essential masonry tools and equipment effectively",
    "Prepare and mix mortar and concrete correctly",
    "Apply the 3:4:5 rule for accurate right angles",
    "Set out building locations and measurements",
    "Cut and lay bricks with proper bonding techniques",
    "Construct walls maintaining alignment and levels",
    "Implement safety procedures on construction sites"
  ];

  const practicalSkills = [
    { skill: "Mortar Mixing", desc: "Hand and machine mixing techniques" },
    { skill: "Brick Cutting", desc: "Accurate cutting for perfect fits" },
    { skill: "Wall Building", desc: "Strong and level wall construction" },
    { skill: "Site Setting", desc: "Precise measurements and layout" }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Bricklaying & Masonry Training</h1>
          <p className="page-description">
            Learn professional bricklaying and masonry techniques from foundation to finishing
          </p>
        </div>

        {/* Course Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="https://cdn01.alison-static.net/courses/5687/alison_courseware_intro_5687.jpg" 
                alt="Bricklaying Training"
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
                <Building2 size={40} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
                  Bricklaying and Masonry for Beginners
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: '1.6' }}>
                Learn how to build a wall and master essential construction techniques - CPD Accredited
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Duration</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>3-4 Hours</div>
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
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Beginner Friendly</div>
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
            onClick={() => window.open('https://alison.com/course/bricklaying-and-masonry-techniques-for-beginners', '_blank')}
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#b91c1c',
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
            background: 'linear-gradient(135deg, #fee2e2, #fecaca)', 
            padding: '2.5rem', 
            borderRadius: '1rem',
            border: '2px solid #fca5a5'
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
                  <CheckCircle size={24} style={{ color: '#b91c1c', flexShrink: 0, marginTop: '0.125rem' }} />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b91c1c' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{module.duration}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      color: '#b91c1c',
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
                            background: '#b91c1c',
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

        {/* Practical Skills */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Practical Skills You'll Master
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {practicalSkills.map((item, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
                borderRadius: '1rem',
                border: '2px solid #fca5a5',
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
                <Hammer size={32} style={{ color: '#b91c1c', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                  {item.skill}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', textAlign: 'center' }}>
            Our Construction Services
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
                      <CheckCircle size={18} style={{ color: '#b91c1c', flexShrink: 0, marginTop: '0.25rem' }} />
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
            Meet Our Construction Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Michael Nkuna',
                role: 'Master Bricklayer',
                experience: '18 years',
                quote: 'A strong foundation built with precision creates structures that stand the test of time.',
                commitment: 'Building community infrastructure'
              },
              {
                name: 'Sarah Chauke',
                role: 'Tiling & Finishing Specialist',
                experience: '9 years',
                quote: 'Excellence in finishing work transforms good construction into exceptional spaces.',
                commitment: 'Training youth in skilled trades'
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
                e.currentTarget.style.borderColor = '#b91c1c';
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
                  background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(185, 28, 28, 0.3)'
                }}>
                  🧱
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#b91c1c', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {member.role}
                </p>
                <div style={{
                  background: '#fee2e2',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #b91c1c'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#991b1b', fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{member.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.85rem', color: '#6b7280' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#111827' }}>{member.experience}</div>
                    <div>Experience</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: '600', marginTop: '1rem' }}>
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
              background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
              border: '2px solid #fca5a5',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#b91c1c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                🏗️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#991b1b', marginBottom: '1rem' }}>
                1360 Hub Construction Site
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#b91c1c', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Practical Building Skills</strong><br />
                Bricklaying, tiling, plastering<br />
                Community projects training<br />
                Acornhoek, Mpumalanga
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#b91c1c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#991b1b'}
                onMouseOut={(e) => e.currentTarget.style.background = '#b91c1c'}
              >
                Join Training Program
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
            Ready to Build Your Construction Career?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Learn online fundamentals → Get TVET certified → Practice on real projects
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('https://alison.com/course/bricklaying-and-masonry-techniques-for-beginners', '_blank')}
              style={{
                padding: '1.25rem 3rem',
                background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(185, 28, 28, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(185, 28, 28, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(185, 28, 28, 0.4)';
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

export default ConstructionDivision;