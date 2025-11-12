import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Award, Star, Filter } from 'lucide-react';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Sample data - replace with actual database
  const professionals = [
    {
      id: 1,
      name: 'Thabo Maluleke',
      category: 'Construction',
      skills: ['Bricklaying', 'Tiling', 'Plastering'],
      location: 'Acornhoek Central',
      phone: '072 123 4567',
      email: 'thabo.m@example.com',
      experience: '8 years',
      rating: 4.8,
      certified: true,
      image: '🧱'
    },
    {
      id: 2,
      name: 'Sarah Nkosi',
      category: 'Electrical & Energy',
      skills: ['House Wiring', 'Solar Installation', 'DSTV Setup'],
      location: 'Bushbuckridge',
      phone: '073 456 7890',
      email: 'sarah.n@example.com',
      experience: '5 years',
      rating: 4.9,
      certified: true,
      image: '⚡'
    },
    {
      id: 3,
      name: 'John Mabuza',
      category: 'Carpentry & Design',
      skills: ['Kitchen Cabinets', 'Wardrobes', 'Custom Furniture'],
      location: 'Acornhoek East',
      phone: '074 567 8901',
      email: 'john.m@example.com',
      experience: '10 years',
      rating: 4.7,
      certified: true,
      image: '🪵'
    },
    {
      id: 4,
      name: 'Michael Chauke',
      category: 'Automotive',
      skills: ['Engine Repair', 'Brake Service', 'Oil Changes'],
      location: 'Acornhoek Central',
      phone: '075 678 9012',
      email: 'michael.c@example.com',
      experience: '6 years',
      rating: 4.6,
      certified: false,
      image: '🚗'
    },
    {
      id: 5,
      name: 'David Rikhotso',
      category: 'Welding & Fabrication',
      skills: ['Aluminium Doors', 'Gates', 'Burglar Bars'],
      location: 'Bushbuckridge',
      phone: '076 789 0123',
      email: 'david.r@example.com',
      experience: '12 years',
      rating: 4.9,
      certified: true,
      image: '🔩'
    },
    {
      id: 6,
      name: 'Grace Mathebula',
      category: 'Construction',
      skills: ['Ceiling Installation', 'Shower Fitting', 'Tiling'],
      location: 'Acornhoek West',
      phone: '077 890 1234',
      email: 'grace.m@example.com',
      experience: '4 years',
      rating: 4.5,
      certified: true,
      image: '🧱'
    }
  ];

  const categories = ['All', 'Construction', 'Electrical & Energy', 'Carpentry & Design', 'Automotive', 'Welding & Fabrication'];
  const locations = ['All', 'Acornhoek Central', 'Acornhoek East', 'Acornhoek West', 'Bushbuckridge'];

  const filteredProfessionals = professionals.filter(prof => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || prof.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || prof.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f0fdfa, #ffffff)', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1f2937', marginBottom: '1rem' }}>
            Find Skilled Professionals
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Connect with certified artisans and technicians in your local area
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '1rem', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="text"
              placeholder="Search by name or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '1rem' }}>
          Showing {filteredProfessionals.length} professional{filteredProfessionals.length !== 1 ? 's' : ''}
        </div>

        {/* Professional Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredProfessionals.map(prof => (
            <div key={prof.id} style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '2px solid #f3f4f6',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(5, 150, 105, 0.15)';
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = '#f3f4f6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>{prof.image}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>
                      {prof.name}
                    </h3>
                    {prof.certified && (
                      <Award size={18} style={{ color: '#059669' }} title="Certified Professional" />
                    )}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#059669', fontWeight: '600', margin: 0 }}>
                    {prof.category}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                    <Star size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>{prof.rating}</span>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', marginLeft: '0.25rem' }}>
                      ({prof.experience})
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {prof.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      padding: '0.25rem 0.75rem',
                      background: '#f0fdfa',
                      color: '#0d9488',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      borderRadius: '9999px',
                      border: '1px solid #99f6e4'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <MapPin size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <span>{prof.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <Phone size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <a href={`tel:${prof.phone}`} style={{ color: '#059669', textDecoration: 'none', fontWeight: '600' }}>
                    {prof.phone}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <Mail size={16} style={{ color: '#059669', flexShrink: 0 }} />
                  <a href={`mailto:${prof.email}`} style={{ color: '#059669', textDecoration: 'none', fontWeight: '600' }}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProfessionals.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
              No professionals found
            </h3>
            <p style={{ color: '#6b7280' }}>
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* CTA Banner */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #059669, #0d9488)',
          color: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)'
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>
            Are You a Skilled Professional?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95 }}>
            Join our directory and connect with customers in your area
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            style={{
              padding: '0.875rem 2rem',
              background: 'white',
              color: '#059669',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
          >
            Register Your Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;