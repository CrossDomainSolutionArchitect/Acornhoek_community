import React, { useState } from 'react';
import { CheckCircle, Award, Clock, BookOpen, Users, ArrowRight, Hammer } from 'lucide-react';

const CarpentryCreative = () => {
  const [showDetails, setShowDetails] = useState(null);

  const courseModules = [
    {
      id: 1,
      title: "Introduction to Carpentry",
      duration: "2-3 hours",
      topics: [
        "History and evolution of carpentry",
        "Modern carpentry techniques and materials",
        "Career opportunities in construction",
        "Safety guidelines and procedures",
        "Employee and employer relationships"
      ]
    },
    {
      id: 2,
      title: "Building Materials & Tools",
      duration: "3-4 hours",
      topics: [
        "Lumber, plywood, and engineered wood products",
        "Fasteners: nails, screws, bolts, and anchors",
        "Adhesives and mastics",
        "Hand and power tools",
        "Material quantity calculations"
      ]
    },
    {
      id: 3,
      title: "Construction Methods",
      duration: "4-5 hours",
      topics: [
        "Reading plans and elevations",
        "Floor systems and framing",
        "Wall and ceiling framing",
        "Roof framing and installation",
        "Structural timber work"
      ]
    },
    {
      id: 4,
      title: "Concrete & Formwork",
      duration: "3-4 hours",
      topics: [
        "Concrete forms and footings",
        "Reinforcing materials",
        "Mix proportions and measurements",
        "Special concrete types",
        "Curing and testing methods"
      ]
    },
    {
      id: 5,
      title: "Finishing & Installation",
      duration: "3-4 hours",
      topics: [
        "Window components and installation",
        "Exterior door types and fitting",
        "Stair construction and design",
        "Trim work and finishing",
        "Quality control and inspection"
      ]
    }
  ];

  const services = [
    {
      icon: "🪑",
      title: "Furniture Design & Fabrication",
      items: [
        "Custom wardrobe and cabinet making",
        "Kitchen unit design and installation",
        "Dining sets and living room furniture",
        "Office furniture and fittings"
      ]
    },
    {
      icon: "🛋️",
      title: "Upholstery Services",
      items: [
        "Couch restoration and reupholstering",
        "Chair padding and covering",
        "Custom cushion creation",
        "Fabric selection and consultation"
      ]
    },
    {
      icon: "🏠",
      title: "Home Solutions",
      items: [
        "Custom shelving and storage solutions",
        "Window frames and trimmings",
        "Door installation and repair",
        "Home renovation carpentry"
      ]
    },
    {
      icon: "🎨",
      title: "Creative Crafts",
      items: [
        "Wood carving and decorative pieces",
        "Custom gift items and souvenirs",
        "Embroidery and textile design",
        "Artistic woodwork projects"
      ]
    }
  ];

  const learningOutcomes = [
    "Master modern carpentry techniques and building materials",
    "Read and interpret construction plans and elevations",
    "Construct floor systems, wall frames, and roof structures",
    "Work with concrete forms, footings, and reinforcement",
    "Install windows, doors, and staircases professionally",
    "Apply safety procedures and industry best practices",
    "Calculate material quantities and project requirements",
    "Use hand and power tools effectively and safely"
  ];

  const careerPaths = [
    { title: "Residential Carpenter", desc: "Wood frame construction and finish materials" },
    { title: "Commercial Carpenter", desc: "Concrete, steel, and preformed materials" },
    { title: "Furniture Maker", desc: "Custom furniture design and fabrication" },
    { title: "Renovation Specialist", desc: "Home improvement and restoration work" }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Diploma in Carpentry Studies</h1>
          <p className="page-description">
            Comprehensive carpentry training - From fundamentals to advanced construction techniques
          </p>
        </div>

        {/* Course Highlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #92400e, #78350f)',
          color: 'white',
          padding: '3rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div>
              <img 
                src="https://cdn01.alison-static.net/courses/680/alison_courseware_intro_680.jpg" 
                alt="Carpentry Training"
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
                <Hammer size={40} />
                <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>
                  Free Diploma in Carpentry Studies
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.95, lineHeight: '1.6' }}>
                Gain in-depth knowledge of modern carpentry procedures and practices - CPD Accredited
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Clock size={24} />
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Duration</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>15-20 Hours</div>
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
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Diploma</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>CPD Accredited</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.open('https://alison.com/course/diploma-in-carpentry-studies-revised', '_blank')}
            style={{
              marginTop: '2rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#92400e',
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
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)', 
            padding: '2.5rem', 
            borderRadius: '1rem',
            border: '2px solid #fcd34d'
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
                  <CheckCircle size={24} style={{ color: '#92400e', flexShrink: 0, marginTop: '0.125rem' }} />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#92400e' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>{module.duration}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={24} 
                    style={{ 
                      color: '#92400e',
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
                            background: '#92400e',
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
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                borderRadius: '1rem',
                border: '2px solid #fcd34d',
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
                <Hammer size={32} style={{ color: '#92400e', marginBottom: '1rem' }} />
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
            Our Carpentry & Creative Services
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
                      <CheckCircle size={18} style={{ color: '#92400e', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Ready to Build Your Carpentry Career?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join thousands of students worldwide and earn your CPD accredited diploma
          </p>
          <button
            onClick={() => window.open('https://alison.com/course/diploma-in-carpentry-studies-revised', '_blank')}
            style={{
              padding: '1.25rem 3rem',
              background: 'linear-gradient(135deg, #92400e, #78350f)',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1.1rem',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(146, 64, 14, 0.4)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(146, 64, 14, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(146, 64, 14, 0.4)';
            }}
          >
            Apply Now - Free Registration <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarpentryCreative;