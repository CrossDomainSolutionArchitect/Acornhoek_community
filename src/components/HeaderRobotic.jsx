import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, MessageCircle, Mail } from 'lucide-react';

const HeaderRobotic = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Programs', 'Workshops', 'Competitions', 'Projects', 'Resources', 'Team'];

  const handleNavClick = (item) => {
    setCurrentPage(item.toLowerCase());
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoUrl = 'https://i.imgur.com/moP8IOp.png';

  return (
    <>
      <style>{`
        :root {
          --yellow: #F6B81A;
          --green-light: #3E7B44;
          --green-dark: #194E38;
          --text-green: #0E4734;
        }

        .header-robotic {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, var(--green-dark) 0%, var(--text-green) 100%);
          backdrop-filter: blur(12px);
          border-bottom: 3px solid rgba(246, 184, 26, 0.3);
          transition: all 0.3s ease;
        }
        .header-robotic.scrolled {
          box-shadow: 0 10px 40px rgba(14, 71, 52, 0.4);
        }

        .nav-container-robotic {
          max-width: 1320px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        /* LOGO */
        .logo-link-robotic {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 4px;
        }
        .logo-link-robotic:hover {
          transform: translateY(-4px) scale(1.05);
          filter: drop-shadow(0 10px 25px rgba(246, 184, 26, 0.3));
        }

        .logo-img-robotic {
          height: 70px;
          width: auto;
          display: block;
          transition: all 0.3s ease;
        }

        @media (max-width: 767px) {
          .logo-img-robotic {
            height: 60px;
          }
        }

        /* NAVIGATION */
        .desktop-nav-robotic {
          display: none;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: flex-end;
        }
        @media (min-width: 768px) {
          .desktop-nav-robotic {
            display: flex;
          }
        }

        .nav-link-robotic {
          background: none;
          border: none;
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        .nav-link-robotic:hover {
          color: var(--yellow);
          background: rgba(246, 184, 26, 0.15);
          transform: translateY(-2px);
        }
        .nav-link-robotic.active {
          color: var(--green-dark);
          font-weight: 700;
          background: var(--yellow);
        }

        /* SOCIAL ICONS */
        .social-icons-robotic {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding-left: 1rem;
          margin-left: 1rem;
          border-left: 2px solid rgba(246, 184, 26, 0.3);
        }
        .social-icon-robotic {
          color: var(--yellow);
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 12px;
          display: flex;
        }
        .social-icon-robotic:hover {
          color: var(--green-dark);
          background: var(--yellow);
          transform: translateY(-3px) rotate(5deg);
        }

        /* CTA BUTTON */
        .cta-button-robotic {
          padding: 0.75rem 1.8rem;
          background: var(--yellow);
          color: var(--green-dark);
          border: 2px solid var(--yellow);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          margin-left: 1rem;
          box-shadow: 0 10px 30px rgba(246, 184, 26, 0.3);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cta-button-robotic:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 50px rgba(246, 184, 26, 0.5);
          background: white;
          color: var(--green-dark);
        }

        /* MOBILE */
        .mobile-toggle-robotic {
          display: flex;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
        @media (min-width: 768px) {
          .mobile-toggle-robotic {
            display: none;
          }
        }

        .mobile-menu-robotic {
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          border-top: 2px solid rgba(246, 184, 26, 0.2);
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .mobile-menu-robotic {
            display: none;
          }
        }

        .mobile-item-robotic {
          background: none;
          border: none;
          padding: 0.85rem 1rem;
          text-align: left;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        .mobile-item-robotic:hover {
          background: rgba(246, 184, 26, 0.15);
          color: var(--yellow);
        }
        .mobile-item-robotic.active {
          color: var(--green-dark);
          background: var(--yellow);
          font-weight: 600;
        }

        .mobile-cta-robotic {
          margin-top: 0.5rem;
          background: var(--yellow);
          color: var(--green-dark);
          text-align: center;
          border-radius: 8px;
          font-weight: 700;
          padding: 0.75rem;
        }
        .mobile-cta-robotic:hover {
          background: white;
        }

        .mobile-socials-robotic {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          padding: 1rem 0;
          border-top: 2px solid rgba(246, 184, 26, 0.2);
          margin-top: 0.5rem;
        }
      `}</style>

      <header className={`header-robotic ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container-robotic">
          {/* LOGO */}
          <button
            className="logo-link-robotic"
            onClick={() => {
              setCurrentPage('robotics');
              setMobileMenuOpen(false);
            }}
            aria-label="1360 Robotics Hub"
          >
            <img
              src={logoUrl}
              alt="1360 Robotics Hub"
              className="logo-img-robotic"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="desktop-nav-robotic">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`nav-link-robotic ${currentPage === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}

            <div className="social-icons-robotic">
              <a
                href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-robotic"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-robotic"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:info@1360hub.co.za"
                className="social-icon-robotic"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="cta-button-robotic"
            >
              Hire our talent
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-robotic"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="mobile-menu-robotic">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`mobile-item-robotic ${currentPage === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-item-robotic mobile-cta-robotic"
            >
              Hire our talent
            </button>

            <div className="mobile-socials-robotic">
              <a
                href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-robotic"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-robotic"
              >
                <MessageCircle size={24} />
              </a>
              <a href="mailto:info@1360hub.co.za" className="social-icon-robotic">
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderRobotic;