import React from 'react';
import { Facebook, MessageCircle, Mail, MapPin, Phone, ArrowRight, Heart } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = ['About', 'Automotive', 'Carpentry', 'Construction', 'Electrical', 'Welding'];
  const roboticsLinks = ['Programs', 'Workshops', 'Competitions', 'Projects', 'Resources'];

  return (
    <>
      <style>{`
        :root {
          --yellow: #F6B81A;
          --green-light: #3E7B44;
          --green-dark: #194E38;
          --text-green: #0E4734;
        }

        .footer {
          background: linear-gradient(135deg, var(--green-dark) 0%, var(--text-green) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--yellow), var(--green-light), var(--yellow));
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* BRAND SECTION */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logos {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-logo-img {
          height: 60px;
          width: auto;
          transition: all 0.3s ease;
          filter: brightness(0) invert(1);
          opacity: 0.95;
        }

        .footer-logo-img:hover {
          transform: translateY(-3px);
          opacity: 1;
        }

        .footer-description {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          max-width: 400px;
        }

        .footer-description strong {
          color: var(--yellow);
          font-weight: 600;
        }

        /* SECTION TITLES */
        .footer-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--yellow);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-section-title::before {
          content: '';
          width: 4px;
          height: 20px;
          background: var(--yellow);
          border-radius: 2px;
        }

        /* LINKS */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          cursor: pointer;
          text-align: left;
          padding: 0.5rem 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          padding-left: 0;
        }

        .footer-link::before {
          content: '';
          width: 0;
          height: 2px;
          background: var(--yellow);
          position: absolute;
          left: 0;
          bottom: 0;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: var(--yellow);
          transform: translateX(5px);
        }

        .footer-link:hover::before {
          width: 30px;
        }

        .footer-link svg {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover svg {
          opacity: 1;
        }

        /* CONTACT INFO */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          color: var(--yellow);
          transform: translateX(3px);
        }

        .contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--yellow);
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
        }

        /* SOCIAL SECTION */
        .footer-social-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-social-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(246, 184, 26, 0.15);
          border: 2px solid rgba(246, 184, 26, 0.3);
          border-radius: 12px;
          color: var(--yellow);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
        }

        .footer-social-icon:hover {
          background: var(--yellow);
          color: var(--green-dark);
          transform: translateY(-5px) rotate(5deg);
          box-shadow: 0 10px 30px rgba(246, 184, 26, 0.4);
        }

        /* BOTTOM BAR */
        .footer-bottom {
          border-top: 2px solid rgba(246, 184, 26, 0.2);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-copyright svg {
          color: var(--yellow);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }

        .footer-credits {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }

        .footer-credits a {
          color: var(--yellow);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .footer-credits a:hover {
          color: white;
        }

        /* NEWSLETTER */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(246, 184, 26, 0.3);
          border-radius: 8px;
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--yellow);
        }

        .newsletter-button {
          padding: 0.75rem 1.5rem;
          background: var(--yellow);
          color: var(--green-dark);
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .newsletter-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(246, 184, 26, 0.4);
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* BRAND SECTION */}
            <div className="footer-brand">
              <div className="footer-logos">
                <img 
                  src="https://i.imgur.com/ujeBXVr.png" 
                  alt="1360 Local Economy Hub" 
                  className="footer-logo-img"
                />
                <img 
                  src="https://i.imgur.com/moP8IOp_d.png?maxwidth=520&shape=thumb&fidelity=high" 
                  alt="1360 Robotics Hub" 
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-description">
                <strong>1360 Local Economy Hub</strong> empowers communities through skills development in automotive, carpentry, construction, electrical, welding, and cutting-edge robotics programs.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="footer-section-title">Programs</h4>
              <div className="footer-links">
                {quickLinks.map(item => (
                  <button 
                    key={item} 
                    onClick={() => setCurrentPage(item.toLowerCase())} 
                    className="footer-link"
                  >
                    <ArrowRight size={14} />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* ROBOTICS LINKS */}
            <div>
              <h4 className="footer-section-title">Robotics Hub</h4>
              <div className="footer-links">
                {roboticsLinks.map(item => (
                  <button 
                    key={item} 
                    onClick={() => setCurrentPage(item.toLowerCase())} 
                    className="footer-link"
                  >
                    <ArrowRight size={14} />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CONTACT & SOCIAL */}
            <div className="footer-social-section">
              <div>
                <h4 className="footer-section-title">Get in Touch</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <Mail size={18} />
                    <a href="mailto:info@vcdsa.co.za">info@vcdsa.co.za</a>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <span>+27 (0) 12 345 6789</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>Bushbuckridge, Acornhoek, South Africa</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="footer-section-title">Follow Us</h4>
                <div className="footer-social-icons">
                  <a 
                    href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a 
                    href="mailto:info@vcdsa.co.za"
                    className="footer-social-icon"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 NPO 1360 Local Economy Hub. Made with <Heart size={16} /> in South Africa
            </p>
            <p className="footer-credits">
              Empowering communities • Building futures
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;