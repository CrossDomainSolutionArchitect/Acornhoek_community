import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const logoUrl = 'https://i.imgur.com/I5SXjfk.png'; // Mpumalanga Rising Sun Logo

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header flex items-center gap-6">
          
          <div>
            <h1 className="page-title text-3xl font-bold">1360 Local Economy Hub</h1>
            <p className="page-description text-lg">
              Empowering Acornhoek & Bushbuckridge by unifying local skills and driving sustainable economic growth.
            </p>
          </div>
        </div>

        <div className="vision-mission-grid grid md:grid-cols-2 gap-6 mt-10">
          <div className="vision-box p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg shadow-md">
            <h3 className="box-title text-xl font-semibold mb-2">Our Vision</h3>
            <p className="box-text text-gray-700">
              To build a thriving local economy by uniting skilled individuals, fostering entrepreneurship, and creating shared prosperity.
            </p>
          </div>

          <div className="mission-box p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg shadow-md">
            <h3 className="box-title text-xl font-semibold mb-2">Our Mission</h3>
            <p className="box-text text-gray-700">
              Empower local artisans, youth, and technicians through training, mentorship, and market access while promoting collaboration.
            </p>
          </div>
        </div>

        <div className="why-choose-box mt-12">
          <h2 className="why-choose-title text-2xl font-bold mb-4">Why Join 1360 Hub?</h2>
          <div className="features-grid grid md:grid-cols-2 gap-4">
            {[
              'Unified Local Skills Network',
              'Entrepreneurship & Business Support',
              'Hands-On Training & Mentorship',
              'Community Development Projects',
              'Access to Market Opportunities',
              'Sustainable & Inclusive Growth'
            ].map((item, i) => (
              <div key={i} className="feature-item flex items-center gap-2 bg-white p-3 rounded shadow-sm">
                <CheckCircle className="feature-icon text-green-500" size={20} />
                <span className="feature-text text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="team-values-section mt-12">
          <h2 className="values-section-title text-2xl font-bold mb-4">What Drives Us</h2>
          <div className="values-cards-grid grid md:grid-cols-4 gap-6">
            {[
              {icon: '🎯', title: 'Excellence', text: 'High-quality training & continuous improvement.'},
              {icon: '🤝', title: 'Collaboration', text: 'Strong relationships between local experts and community.'},
              {icon: '💡', title: 'Innovation', text: 'Creative solutions and technology for efficiency.'},
              {icon: '❤️', title: 'Empowerment', text: 'Enabling skills development and access to resources.'}
            ].map((v, i) => (
              <div key={i} className="value-detail-card p-4 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg shadow">
                <div className="value-detail-icon text-3xl mb-2">{v.icon}</div>
                <h3 className="value-detail-title font-semibold">{v.title}</h3>
                <p className="value-detail-text text-gray-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
